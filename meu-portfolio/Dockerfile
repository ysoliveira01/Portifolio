# --- Stage 1: Build da Aplicação React ---
# Usamos uma imagem Node.js para instalar dependências e construir o projeto.
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container.
WORKDIR /app

COPY package*.json ./

# Instala as dependências do projeto.
RUN npm install

COPY . .

RUN npm run build

# --- Stage 2: Servir a Aplicação com Nginx ---
# Usamos uma imagem Nginx leve para servir os arquivos estáticos.
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/portfolio.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]