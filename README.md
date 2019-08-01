# lambda-thumbnails
Create a thumbnail for each image file that is uploaded to a bucket.

https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html


$ aws lambda create-function --function-name CreateThumbnail \
--zip-file fileb://dist/lambda-thumbnails_0-0-1_2019-7-1-9-18-12.zip --handler index.handler --runtime nodejs8.10 \
--timeout 10 --memory-size 1024 \
--role arn:aws:iam::919568423267:role/lambda-thumbnails-s3-role

$ aws lambda update-function-configuration --function-name CreateThumbnail --timeout 30

$ aws lambda invoke --function-name CreateThumbnail --invocation-type Event \
--payload file://event.json outputfile.txt

$ grunt lambda_invoke
$ grunt lambda_package
$ grunt lambda_deploy
$ grunt deploy