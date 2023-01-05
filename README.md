# nest-kafka
Microservices using Kafka

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
1. Api Gateway: POST http://localhost:3000/billing
```
{
    "userId":"d7564509-0c01-4ffc-a4bd-c7796d96ff20",
    "price": 3500
}
```
