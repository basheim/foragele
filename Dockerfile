FROM node:14-alpine

RUN apk add --update npm

WORKDIR /app
COPY . .

RUN npm install --production
RUN npm run build

RUN addgroup usergroup
RUN adduser --no-create-home --disabled-password --ingroup usergroup appuser
RUN chown -R appuser:usergroup /app
USER appuser

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]