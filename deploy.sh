CONTAINER_ID=$(docker ps --filter name=haeahn-bim-assessment -q)
docker stop $CONTAINER_ID
docker rm $CONTAINER_ID
docker rmi haeahn-bim-assessment_react
docker-compose up -d --build
