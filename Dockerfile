# Fase de build
# Usando uma imagem oficial do Node como base
FROM node:18-alpine as build-stage

# Definindo o diretório de trabalho no container
WORKDIR /app

# Copiando os arquivos e pastas restantes para o diretório de trabalho
COPY . .

RUN rm -rf dist

# Instalando dependências do projeto
RUN npm install
RUN npm install -g serve

# Construindo a aplicação para produção
RUN npm run build

CMD ["serve", "-s", "/app/dist", "-l", "5000"]
