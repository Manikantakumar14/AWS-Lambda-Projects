## cd into bookmuseum directory and run zip command.

zip -r bookmuseum \*


## aws create role with the trust-policy file created locally and giving a role name BookMuseumLambdaRole.

aws iam create-role --role-name BookMuseumLambdaRole --assume-role-policy-document file://trust-policy.json


## aws attach AWSLambdaBasicExecutionRole policy to role BookMuseumLambdaRole

aws iam attach-role-policy --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole --role-name BookMuseumLambdaRole


## create aws lambda function

aws lambda create-function --function-name BookMuseum --handler index.handler --role arn:aws:iam::112236679159:role/BookMuseumLambdaRole --zip-file fileb://bookmuseum.zip --runtime nodejs18.x --publish


## invoke the lambda function from aws cli

aws lambda invoke \
 --function-name BookMuseum \
 --cli-binary-format raw-in-base64-out \
 --payload '{ "buyer_id": "mariano", "museum_name": "tate gallery", "when": "2020-03-14" }' \
 response.json
