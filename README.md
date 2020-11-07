# iCommerce

Create a product
curl --location --request POST 'http://localhost:3001/products' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "iPhone 12 Mini",
"price": 50,
"branch": "Apple",
"color": "blue"
}'

Update a product
curl --location --request PATCH 'http://localhost:3001/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Updated iPhone 12",
"price": 200,
"branch": "Apple",
"color": "yellow"
}'

Delete a product
curl --location --request DELETE 'http://localhost:3001/products/ckh79vnag00009k15heoe9s1b' \
--header 'Content-Type: application/json'

Read a product
curl --location --request GET 'http://localhost:3002/products/ckh79ap8700030a159eehbk7c' \
--header 'Content-Type: application/json'
