# Estudo-nodejs-banda

informações 
docker build -t nodejs-estudo . 
docker run -it -p 8083:8083 nodejs-estudo

dependencias 
-- rodando mongoDB 
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

-- rodando app spring 
docker run -e "SPRING_PROFILES_ACTIVE=dev" -p 8081:8081 -t spring-server-generated

-- iniciando servidor nodejs
npm start
