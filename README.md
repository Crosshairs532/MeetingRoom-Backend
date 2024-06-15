# Meeting Room Booking System for Co-working spaces

> ### Project Summary

#### Admin Actions:
```
> Room Management: Admins can create, update, and delete rooms. They can add details like the room name, room number, floor number, capacity, price per slot, and available amenities.
Slot Creation: Admins set up time slots for each room by specifying the date, start time, and end time. This helps ensure users have a variety of booking options.
```
#### User Interactions:
```
> Booking: Users can book rooms by selecting from the available time slots. They choose the date, pick specific slots, and select their desired room.
Cost Calculation: The system automatically calculates the total cost based on the number of slots selected and the price per slot.
Real-Time Availability: Users receive immediate feedback on room and slot availability to avoid booking conflicts
```


#### after cloning the github repositories . You have to install the dependencies. YOu may see below dependencies. 
___
```
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "http-status": "^1.7.4",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.1",
    "zod": "^3.23.8"
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.4.0",
  
```
### These are some dependencies and dev-dependencies you have to install. 
___
```
npm i bcrypt
```
```
npm i cors
```
```
npm install dotenv --save
```
```
npm i express
```
```
npm install mongoose --save
```
```
npm install typescript --save-dev
```
```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```
```
npm install --save-dev prettier
```
```
npm install --save-dev eslint-config-prettier
```
```
npm i ts-node-dev --save-dev
```
```
npm i @types/cors
```
```
npm i @types/express
```

#### Go to the package.json file. You will see these scripts which to make your work easy. Also follow the json file to install the necessary packages and dependencies.
___
```
  "scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "eslint src --ignore-path .eslintignore --ext .js,.ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \".src/**/*.+(js|ts|json)\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
#### after all of these installation your can run the project easily. But if You face any problem Go through the package.json file and install whatever causing the problem. 
## Here is a important blog that may help you. 
___
[BLOG](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
