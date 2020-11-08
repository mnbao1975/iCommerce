# iCommerce

Problem statment
A small start-up named "iCommerce" wants to build an online shopping application to sell their products. In order to get to the market quickly, they just want to build a version with a very limited set of functionalities.

We will design and implement the ​backend services, we don’t need to build the frontend web application​.

Use cases
We'll scope the problem to handle only the following use cases:
. User creates a new product with detailed info of name, price, branch and color
. User deletes a specific product
. User updates a specific product
. User views the details of of a specific product
. User searches a specific product by id
. User filter a list of products with conditions such and name and color.
. User's activities on product such as viewing a product, filtering a list of products will be stored

Out of scope
. No customer registration
. No customer authentication & authorization
. No online payment

Constraints & assumptions
. A request with "user-id" header will be considered a request of a user who was signed in
. MongoDB and Redis are installed and running

High level design
user/repo/blob/branch/other_file.md
https://github.com/mnbao1975/iCommerce/blob/main/images/NAB-solution-architecture.png
[a relative link](mnbao1975/iCommerce/blob/main/images/NAB-solution-architecture.png)
Tech Stack

POST a product
curl --location --request POST 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "iPhone 12 Mini",
"price": 50,
"branch": "Apple",
"color": "blue"
}'

PATCH a product
curl --location --request PATCH 'http://localhost:3000/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Updated iPhone 12",
"price": 200,
"branch": "Apple",
"color": "yellow"
}'

DELETE a product
curl --location --request DELETE 'http://localhost:3000/products/ckh79vnag00009k15heoe9s1b' \
--header 'Content-Type: application/json'

GET a product
curl --location --request GET 'http://localhost:3000/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

GET all products
curl --location --request GET 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

GET products with conditions
curl --location --request GET 'http://localhost:3000/products?name=iphone&color=red' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

docker run --rm --name local-mongo -p 27017:27017 -v ~/mongodata:/data/db -d mongo
docker run --rm --name my-redis -p 6379:6379 -d redis
