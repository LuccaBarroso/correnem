<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Envio de foto" />
  <div class="container">
    <RouterLink to="/nova-redacao" class="back-link"> Mudar forma de envio </RouterLink>
    <div class="enviar-foto" v-if="curStep === 0">
      <input type="file" accept="image/*" @change="onFileChange" />
      <div class="final">
        <button class="btn-padrao" @click="confirmar">Confirmar</button>
      </div>
      <canvas id="canvas-preview"></canvas>
    </div>
    <div class="cortar-foto" v-if="curStep === 1">
      <div class="ocr-msg">
        <p>
          Selecione a área da imagem que contém o texto da redação. O texto será extraído
          automaticamente.
        </p>
      </div>
      <cropper :src="imgSrc" @change="change" class="cropper" />
      <div class="final">
        <button class="btn-padrao" @click="voltarFoto">Voltar</button>
        <button class="btn-padrao" @click="cortarFoto">Continuar</button>
      </div>
    </div>
    <canvas id="canvas-preview-2"></canvas>
    <div class="envio-final" v-if="curStep === 2">
      <div class="canvas-holder">
        <canvas id="canvas-final" class="visible"></canvas>
      </div>
      <div class="final">
        <button class="btn-padrao" @click="voltarFoto">Voltar</button>
        <button class="btn-padrao" @click="enviarFoto">Confirmar</button>
      </div>
      <div class="error-input" v-if="errorMsg">{{ errorMsg }}</div>
    </div>
  </div>
  <LoadingOverlay v-if="loading" />
</template>

<script setup lang="ts">
import LoadingOverlay from '@/components/Basic/LoadingOverlay.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { ref, onMounted } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { useRouter } from 'vue-router'
import { type Breadcrumb } from '@/types/Breadcrumb'

const router = useRouter()

const loading = ref(false)
const imgSrc = ref(null) // Will hold the captured image data
const canFlipCamera = ref(false)
const curStep = ref(0)
const cropped = ref(null)
const errorMsg = ref(null)
const fileInput = ref(null)

const breadcrumbs: Breadcrumb[] = [{ text: 'Nova Redação', href: '/nova-redacao' }]

const onFileChange = (event) => {
  fileInput.value = event.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    imgSrc.value = e.target.result
    curStep.value++
  }
  reader.readAsDataURL(fileInput.value)
}

// Capture and assign the photo to imgSrc for cropping
const tirarFoto = () => {
  const video = document.querySelector('video')
  const canvas = document.querySelector('#canvas-preview')
  canvas.height = video.videoHeight
  canvas.width = video.videoWidth
  const context = canvas.getContext('2d')
  context.drawImage(video, 0, 0)

  // Assign the image data to imgSrc for VueCropper to use
  imgSrc.value = canvas.toDataURL('image/png')
  curStep.value++
}

// Flip the camera
const virarCamera = () => {
  const video = document.querySelector('video')
  const stream = video.srcObject
  const tracks = stream.getTracks()

  tracks.forEach((track) => {
    track.stop()
  })

  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: 'environment' } }) // Flip the camera
    .then((stream) => {
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.log(error)
    })
}

const change = ({ coordinates, canvas }) => {
  cropped.value = canvas
}
// Crop the image
const cortarFoto = () => {
  curStep.value++
  setTimeout(() => {
    const canvasFinal = document.querySelector('#canvas-final')
    const contextFinal = canvasFinal.getContext('2d')
    canvasFinal.width = cropped.value.width
    canvasFinal.height = cropped.value.height
    contextFinal.drawImage(cropped.value, 0, 0)
  }, 100)
}

// Go back to the camera capture step
const voltarFoto = () => {
  errorMsg.value = null
  setTimeout(() => {
    startCamera()
  }, 100)
  curStep.value--
}

const enviarFoto = () => {
  const canvasFinal = document.querySelector('#canvas-final')
  const dataUrl = canvasFinal.toDataURL('image/png')

  // Convert base64 to Blob
  function dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1])
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    return new Blob([ab], { type: mimeString })
  }

  const blob = dataURLtoBlob(dataUrl)

  // Send the image data to the server
  const formData = new FormData()
  formData.append('image', blob, 'canvas-image.png')

  loading.value = true
  // lock scroll
  document.body.style.overflow = 'hidden'

  fetch(import.meta.env.VITE_APP_API_URL + '/correnem-llm-ms/llm/extrair-texto', {
    method: 'POST',
    body: formData,
    credentials: 'include'
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      loading.value = false
      document.body.style.overflow = 'auto'
      data.extractedText = data.extractedText.replace(/(?<!\.)\n/g, ' ')
      localStorage.setItem('redacao', data.extractedText)
      router.push('/nova-redacao/texto')
    })
    .catch((error) => {
      console.error('Error:', error)
      loading.value = false
      errorMsg.value = 'Erro ao enviar a redação. Tente novamente.'
      document.body.style.overflow = 'auto'
    })
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.enviar-foto {
  input {
    margin-block: 15px;
    padding: 20px 10px;
    background-color: #04488470;
    border: 3px dashed #044884;
    width: 100%;
  }
}
.error-input {
  color: var(--red);
  font-size: 1.1rem;
  font-family: 'Plein-Medium';
  margin-top: 10px;
}
.back-link {
  color: var(--black);
  margin-bottom: 5;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  span.opcional {
    font-weight: 400;
    color: var(--blue);
  }
  label {
    font-size: 1.1rem;
    font-family: 'Plein-Medium';
    font-weight: 400;
    margin-bottom: 5px;
  }
  textarea,
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    font-size: 1rem;
    font-family: 'Switzer-Medium';
    background-color: #ece5f0;
    transition: all 0.3s ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #04488470;
    }
  }
}
.final {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  button:not(:last-child) {
    margin-right: 10px;
  }
}
.btn-padrao {
  padding: 5px 20px;
  font-size: 1.2rem;
}

.holder-tema,
.holder-tema input {
  width: 100%;
}

.holder-tema {
  position: relative;
  .sugestoes {
    h3 {
      font-size: 1.1rem;
      font-family: 'Plein-Medium';
      color: var(--black);
      margin-bottom: 15px;
      font-weight: 400;
    }
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    background-color: #ffffff83;
    backdrop-filter: blur(3px);
    padding: 10px 20px;
    z-index: 2;
    border-radius: 0 0 5px 5px;
    .item-sugestao {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
      transition: all 0.3s ease-in-out;
      padding: 5px;
      align-items: center;
      p {
        font-size: 1rem;
        font-family: 'Switzer-Medium';
        color: var(--black);
        padding-inline: 5px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        /* ... when the text is too long */
        text-overflow: ellipsis;
      }
      span {
        background-color: var(--blue);
        padding: 5px 10px;
        font-size: 0.9rem;
        font-family: 'Switzer-Medium';
        color: var(--white);
        margin: 0;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        min-width: 99px;
      }
      &:hover {
        cursor: pointer;
        background-color: var(--blue);
        border-radius: 5px;
        p {
          color: var(--white);
        }
        span {
          background-color: var(--white);
          opacity: 0.8;
          color: var(--blue);
        }
      }
    }
  }
}

video {
  width: 100%;
  height: 100%;
  margin-top: 15px;
}

canvas:not(.visible) {
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  top: 0;
  position: absolute;
}

.cortar-foto .cropper {
  width: 100%;
  height: 100%;
  margin-block: 15px;
}

.unsuported {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  h2 {
    font-size: 21px;
    font-family: 'Plein-Medium';
    font-weight: 400;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-family: 'Switzer-Medium';
    font-weight: 400;
    color: var(--gray);
  }
}

.envio-final .canvas-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 15px;
}

.ocr-msg {
  background-color: #e6f4e6;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
  p {
    font-size: 1rem;
    font-family: 'Switzer-Medium';
    color: var(--black);
    margin-bottom: 0;
  }
}
</style>
