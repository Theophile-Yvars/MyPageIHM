#!/bin/bash

IMAGE_NAME=mypage/ihm
IMAGE_TAG_CURRENT=0.0.0

echo "### Build new image ${IMAGE_NAME}:${IMAGE_TAG_CURRENT}"

docker build  --tag ${IMAGE_NAME}:${IMAGE_TAG_CURRENT} .