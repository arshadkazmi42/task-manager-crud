# Task Manager

Simple task manager app with Task list containing list of tasks


## Pre-Requisites

- Node 12+
- Docker
- docker-compose
  https://docs.docker.com/compose/install/


## Setup

- Node Application Runs on port 8000, (make sure you don't have anything running on that port)


### Using docker-compose

- In the project root directory run below command

```
docker-compose up
```

- To remove all containers

```
docker-compose down
```


### Setup Manual

#### Create MySQL Database using below docker command

```
docker run -p 127.0.0.1:3306:3306 --name=mysql-server -e MYSQL_ROOT_PASSWORD=root -d mysql
```


#### Import `schema.sql` file using below command

```
docker exec -i mysql-server mysql -uroot -proot sys < schema.sql
```


#### Install Node Dependencies

```
npm install
```


#### Start Node Application

```
node index.js
```


## How to use?

- Import the postman collection `Dataminr.postman_collection.json` in postman
- Try using the APIs
- Note: Some dummy data will already be present if you have used above steps to setup the database


## Tests

- To run the tests using the below command

```
npm test
```
