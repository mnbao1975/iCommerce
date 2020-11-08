# iCommerce

## Problem statment

A small start-up named "iCommerce" wants to build an online shopping application to sell their products. In order to get to the market quickly, they just want to build a version with a very limited set of functionalities.

We will design and implement the ​backend services, we don’t need to build the frontend web application​.

## Use cases

We'll scope the problem to handle only the following use cases:

- User creates a new product with detailed info of name, price, branch and color
- User deletes a specific product
- User updates a specific product
- User views the details of of a specific product
- User searches a specific product by id
- User filters a list of products with conditions such and name and color.
- User's activities on product such as viewing a product, filtering a list of products will be stored into database

## Out of scope

- No customer registration
- No customer authentication & authorization
- No online payment

## Constraints & assumptions

- A request with "user-id" header will be considered as a request of a signed-in user
- MongoDB and Redis are installed and running
- Only one MongoDB instance, no replicated instance. It's just showed on the system architecture for reviewing

## High level design

![High level design](https://github.com/mnbao1975/iCommerce/blob/main/images/NAB-solution-architecture.png?raw=true)

The backend is designed with some modern patterns as following:

- Microservices pattern - There are 3 REST API services. One of them is a API gateway running as the main endpoint for user's requests. And, when a request reaches it, the request will be routed to the relevant REST API service
- Event-driven pattern - User's activities on the product such as viewing a product, filtering a list of products will be stored in the database. Those activities will be published as events to other services (workers) which will process those events for sales or marketing purpose. With this pattern, any service (worker) could subscribe to a channel in order to receive published events for its own purpose
- CQRS pattern - the system seperates the writing and reading data APIs for scaling easily.

## A sequence diagram

![A sequence diagram](https://github.com/mnbao1975/iCommerce/blob/main/images/NAB-seq-diagram.png?raw=true)

The above diagram is the workflow for searching product(s). Users can view details of a specifice product or filter the list of products with conditions such as name and color. And, their activies will be stored in the database for sales or marketing purpose.

## Databases and data schema

We use MongoDB (NoSQL) for storing information of product and customer's activity (as an event). And, using Redis as a pub/sub platform.

Here are some examples of data stored in the MongoDB or pusblished to Redis.

A product data:

```
{
    "_id": "ckh79ap8700030a159eehbk7c",
    "name": "Updated iPhone 12",
    "price": 200,
    "branch": "Apple",
    "color": "yellow",
    "createdOn": 1604727460663,
    "modifiedOn": 1604745455123
}
```

An event data of searching a specific product:

```
{
    "_id": "ckh9dk5r40004cb159wvz3olq",
    "eventName": "VIEW_PRODUCT",
    "eventTime": 1604855552698,
    "userId": "123abc",
    "userAgent": "PostmanRuntime/7.26.5",
    "metadata": {
        "productId": "ckh798q2j00020a150jzlasvr"
    },
    "createdOn": 1604855552811
}
```

An event data of filtering products by conditions of name and color:

```
{
    "_id": "ckh922gv30002cb154uttbw9q",
    "eventName": "FILTER_PRODUCT",
    "eventTime": 1604836251596,
    "userId": "123abc",
    "userAgent": "PostmanRuntime/7.26.5",
    "metadata": {
        "query": {
            "name": "iphone",
            "color": "red"
        }
    },
    "createdOn": 1604836251616
}
```

Example of a publised event message (via Redis):

```
{
  id: 'ckh9dkmej0001xw15e12h86hf',
  eventName: 'VIEW_PRODUCT',
  eventTime: 1604855574371,
  userId: '123abc',
  userAgent: 'PostmanRuntime/7.26.5',
  metadata: { productId: 'ckh798q2j00020a150jzlasvr' },
  createdOn: 1604855574379
}
```

## Tech Stacks

- MacOS
- MongoDB 4.x
- Redis 6.x
- NodeJS 12.x
- ExpressJS 4.x

## Architecure of Application

### The clean architecutre pattern

The 3 REST API services are implemented with clean architecture.

### Folder structure

![A sequence diagram](https://github.com/mnbao1975/iCommerce/blob/main/images/root-folders.png?raw=true)

The api-gateway, build-product and search-product folders are REST API services. And, the cus-insights folder is a worker for processing 2 types of event. This worker will store those events into the databases also.

Also, the following folder structure of the build-product REST API service which will show how the source code is structured with the clean architecture pattern.

![A sequence diagram](https://github.com/mnbao1975/iCommerce/blob/main/images/build-product-folder.png?raw=true)

## Local deployment

### Setup database servers

Assume that MongoDB and Redis are installed and running on the local computer. Or we can use docker to get them run on the local machine.

For MongoDB:

```
$ docker run --rm --name local-mongo -p 27017:27017 -v ~/mongodata:/data/db -d mongo
```

For Redis:

```
$ docker run --rm --name local-redis -p 6379:6379 -d redis
```

### Clone the source code

The source code and all relevant documents are hosted on GitHub.

```
$ cd ~
$ git clone https://github.com/mnbao1975/iCommerce.git
```

### Build & start the api-gateway service

```
$ cd ~/iCommerce/api-gateway
```

Save the sampledotenv file as .env and fill in the appropriate values

```
$ npm install
$ npm run dev
```

### Build & start the build-product service

Open a new terminal.

```
$ cd ~/iCommerce/build-product
```

Save the sampledotenv file as .env and fill in the appropriate values

```
$ npm install
$ npm run dev
```

### Build & start the search-product service

Open a new terminal.

```
$ cd ~/iCommerce/search-product
```

Save the sampledotenv file as .env and fill in the appropriate values

```
$ npm install
$ npm run dev
```

### Build & start the cus-insights worker

Open a new terminal.

```
$ cd ~/iCommerce/cus-insights
```

Save the sampledotenv file as .env and fill in the appropriate values

```
$ npm install
$ npm run dev
```

## Testing

As mentioned before that the API gateway running as the main endpoint for user's requests. And, all request examples will use port 3000 to send requests to the API gateway. So, in case we use another port for the API gateway, please change it.

To create a new product:

```
$ curl --location --request POST 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "A new product",
"price": 50,
"branch": "Apple",
"color": "blue"
}'
```

To update a specific product by id:

```
$ curl --location --request PATCH 'http://localhost:3000/products/ckh9el09h0000vo150fnxhwl8' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Updated product",
"price": 200,
"branch": "Apple",
"color": "yellow"
}'
```

To delete a specific product by id:

```
$ curl --location --request DELETE 'http://localhost:3000/products/ckh9el09h0000vo150fnxhwl8' \
--header 'Content-Type: application/json'
```

To search a specific product by id:

```
$ curl --location --request GET 'http://localhost:3000/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

```

To get all products:

```
$ curl --location --request GET 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'
```

To filter products with conditions such as name and color. The name will be filtered by 'regex' (regular expression):

```
$ curl --location --request GET 'http://localhost:3000/products?name=iphone&color=red' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'
```

## Need to improve

We should have 2 workers for processing 2 types of event separately: filtering products and viewing a product.
