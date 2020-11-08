# iCommerce

POST a product
curl --location --request POST 'http://localhost:3001/products' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "iPhone 12 Mini",
"price": 50,
"branch": "Apple",
"color": "blue"
}'

PATCH a product
curl --location --request PATCH 'http://localhost:3001/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Updated iPhone 12",
"price": 200,
"branch": "Apple",
"color": "yellow"
}'

DELETE a product
curl --location --request DELETE 'http://localhost:3001/products/ckh79vnag00009k15heoe9s1b' \
--header 'Content-Type: application/json'

GET a product
curl --location --request GET 'http://localhost:3002/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

GET all products
curl --location --request GET 'http://localhost:3002/products' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

GET products with conditions
curl --location --request GET 'http://localhost:3002/products?name=iphone&color=red' \
--header 'Content-Type: application/json' \
--header 'user-id: 123abc'

docker run --rm --name local-mongo -p 27017:27017 -v ~/mongodata:/data/db -d mongo
docker run --rm --name my-redis -p 6379:6379 -d redis
