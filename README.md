```
~ docker-compose up --build
```

```
~ docker build -t alexisvgutec/repo-utec-ms-products-ts:latest . --platform linux/amd64
~ docker tag alexisvgutec/repo-utec-ms-products-ts:latest alexisvgutec/repo-utec-ms-products-ts:1
~ docker push alexisvgutec/repo-utec-ms-products-ts:1
```

```
~ docker pull alexisvgutec/repo-utec-ms-products-ts:1
~ docker run -d -p 5000:5001 --name container-products alexisvgutec/repo-utec-ms-products-ts:1
```