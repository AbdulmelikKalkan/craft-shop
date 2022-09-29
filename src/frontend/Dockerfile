FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js

# COPY components ./components
# COPY data ./data
# COPY pages ./pages
# COPY public ./public
# COPY styles ./styles

CMD ["yarn", "dev"]