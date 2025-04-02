# TypeScript CRUD REST API
This project was created as a hands-on approach to studying the TypeScript language. It implements a CRUD REST API that allows interaction with a MongoDB database.

## Technologies Used
- **TypeScript**: Used as the main programming language for type safety and better development experience.
- **MongoDB**: NoSQL database used for storing application data.

## Noteworthy Packages
- **mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **rimraf**: Utility for recursively removing files and directories.
- **concurrently**: Allows running multiple commands simultaneously.
- **express**: Web framework for Node.js used to create the API.

## Project Structure
```
/config
/controllers
/dist
  ├── config
  ├── controllers
  ├── models
  ├── routes
  ├── index.js
/models
/routes
.gitignore
index.ts
package-lock.json
package.json
tsconfig.json
```

## Scripts
The following scripts are used to automate the implementation:
```json
"scripts": {
  "build": "rimraf dist && npx tsc",
  "prestart": "npm run build",
  "start": "node dist/index.js",
  "preserve": "npm run build",
  "serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\""
}
```

## Summary
This is a small project designed to reinforce knowledge in REST API development, CRUD operations, and learning how to use TypeScript effectively.

