# Fase de build
# Usando uma imagem oficial do Node como base
FROM node:18-alpine as build-stage

# Definindo o diretório de trabalho no container
WORKDIR /app

# Copiando os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalando dependências do projeto
RUN npm install
RUN npm install -g serve

# Copiando os arquivos e pastas restantes para o diretório de trabalho
COPY . .

# Construindo a aplicação para produção
RUN npm run build

# Criando a pasta public e movendo os arquivos de imagem para dentro dela
RUN mkdir /app/dist/public && \
  mv /app/dist/*.png /app/dist/public/ && \
  mv /app/dist/*.svg /app/dist/public/ && \
  mv /app/dist/*.jpg /app/dist/public/ && \
  mv /app/dist/*.ico /app/dist/public/

CMD ["serve", "-s", "/app/dist", "-l", "80"]
