# POC Nestjs with Kafka
 Project using Nestjs with Kafka, three microservices and an API Gateway.

## Description
Project to test the use of Kafka in a microservices architecture.

## Installation
1. Run `docker-compose up -d` to start the Kafka and Zookeeper containers.
2. Enter the `api-gateway` folder and run `npm install` to install the dependencies.
3. Run `npm run start:dev` to start the API Gateway.
4. Enter the `ms-auth` folder and run `npm install` to install the dependencies.
5. Run `npm run start:dev` to start the Authentication Microservice.
6. Enter the `ms-billing` folder and run `npm install` to install the dependencies.
7. Run `npm run start:dev` to start the Billing Microservice.

## Usage
1. Api Gateway Create user: POST http://localhost:3000/api/auth/sign-up
```
{
    "name": "Richard Jans",
    "email": "hola@gmail.com"
}
```

2. Api Gateway Make pay: POST http://localhost:3000/api/payments/pay
```
{
    "userId":1,
    "amount": 3500
}
```
