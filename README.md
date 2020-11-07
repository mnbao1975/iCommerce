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

Delete a product
curl --location --request DELETE 'http://localhost:3001/products/ckh79vnag00009k15heoe9s1b' \
--header 'Content-Type: application/json'
