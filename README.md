# Location Service

## Start the Application

### Docker

you can use docker-compose to run the application

```bash
docker-compose up
```

- API will be hosted on port : `8080`
- Frontend client application will host on port : `3000`

## If docker didn't work for your

#### Start the backend

```bash
cd server
npm i
npm start
```

#### Start the frontend

```bash
cd client
npm i
npm run dev
```

> Make sure to start the backend first. Unless data won't fetched into the frontend


## Documents

Click [here](https://documenter.getpostman.com/view/26690466/2s946chEzc) to view the API Document.  
Click [here](https://www.figma.com/file/D0pBprWCJ8yOSlIlOdKEYe/Full-Stack-Developer---Internship-Assignment?type=design&node-id=0%3A1&mode=design&t=FSoKd9Af3Q4ZyTwA-1) to view the simple UI design for the frontend.

## Project Details

```client``` - Frontend application  
```server``` - Rest API

Used `mongo-memory-server` as the database for this project. 
> If the server restart, the data will be lost.

