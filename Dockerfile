
# Node.js lts image
FROM node:lts

# ワーキングディレクトリを指定
WORKDIR /usr/src/app

# 同一ディレクトリ内のファイルを全てコピー
COPY . .

# パッケージをインストール
RUN npm install

# 3000番ポートでリッスン
EXPOSE 3000

# React の起動
CMD ["npm", "run", "start"]



# Nginxのイメージを使用
# FROM nginx:alpine

# # ビルドした成果物をNginxのhtmlディレクトリにコピー
# COPY build /usr/share/nginx/html

# # 80番ポートを開放
# EXPOSE 80

# # Nginxを起動
# CMD ["nginx", "-g", "daemon off;"]
