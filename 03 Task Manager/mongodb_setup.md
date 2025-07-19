# MongoDB Atlas?
- NoSQL, non-relational database
- Stores JSONs in document format
- Easy to get started
- Free cloud hosting


# Setup
1. https://www.mongodb.com/ > Atlas
2. Create an account
3. Create project
4. Create free-tier cluster
5. Add database credentials
	1. Security > Database Access > Add New Database User
	2. Set built-in role to "Atlas admin" / "Read and write to any database"
	3. Delete any existing users
6. Setup Network Access
	- Deployed projects should have the server IP registered
	- Just allow all IPs when practicing (this must be registered too)
7. Copy connection string
	1. Database > Clusters > "Connect" button
	2. "Connect your application" > Drivers
	3. Copy connection string to code > add to .env

# Structure
**Database > Collections > Documents**
### Collections
	Akin to tables

1. Clusters > Browse Collections > Add My Own Data
2. Create Database
3. Create collections 

### Documents
	Entries within a collection

- This is where it differs from SQL
- **Dynamic scheme:** documents in the same collection don't need the same set of fields/structure
- All document entries include a unique ObjectId string

# Mongoose?
	MongoDB object modeling for Node.js

- Alternative to native mongodb driver
- Extremely straightforward API
- Simplified workflow

`npm install mongoose`


# .env?
	Secure storage of sensitive information
- Omit from Git to avoid sharing information to Github
- Store connection string here
- Requires dotenv dependency: `npm install dotenv`
- Use app.js to access .env


# Additional Info
- Both Express and Mongoose use async functions
- It is essential to connect to the DB, **then** start the server
- Use try/catch + async/await to make the app wait for a successful DB connection (returned promise)