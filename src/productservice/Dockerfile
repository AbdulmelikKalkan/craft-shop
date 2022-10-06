FROM golang:1.19.2-alpine

WORKDIR /src

COPY go.mod ./
RUN go mod download

COPY . .

RUN go build -o /bin/app .

ENTRYPOINT [ "/bin/app" ]