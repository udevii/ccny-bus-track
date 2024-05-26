#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

VERSION=$1
ZIP_FILE="flaskbb_deploy-$VERSION.zip"
S3_BUCKET="terraform-state-ccnybustracker-mshabbir76"
APP_NAME="flaskbb"
ENV_NAME="flaskbb-environment"
REGION="us-east-1"

# Create a zip file of the application
zip -r "$ZIP_FILE" ./flaskbb ./.ebextensions wsgi.py setup.py setup.cfg 
requirements.txt flaskbb.cfg celery_worker.py

# Upload the zip file to S3
aws s3 cp "$ZIP_FILE" s3://$S3_BUCKET

aws elasticbeanstalk create-application-version \
  --application-name $APP_NAME \
  --source-bundle S3Bucket="$S3_BUCKET",S3Key="$ZIP_FILE" \
  --version-label "ver-$VERSION" \
  --description "file permissions" \
  --region $REGION

aws elasticbeanstalk update-environment \
  --environment-name $ENV_NAME \
  --version-label "ver-$VERSION" \
  --region $REGION

