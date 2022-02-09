# Backend Assignment
## TODO List
- Create APIs to get all, get by id, add, update by id and delete by id a TODO list
- Should use MongoDB as a database
- API should not have any additional routes
- Fields required in Todo list:

> user name
> title for todo
> field to track whether task is complete or not
> created at
> updated at
> category (work, hobby, task)

### Prefered Technologies
|Environment    |Framework|
|---------------|---------|
|Backend APIs|	Express Js|
|Database|	MongoDB|
|ORM/ODM|	Mongoose|

---
# Backend Assignment
## TODO List with filtering
- In the existing APIs that you have created in day 1, add filters to the todo list
- Get all todo list should be able to have additional filters to :
- fetch by category
- search by title
- Add capability to sort the data by created_at
- Add api to mark Todo as done, can you use an exisiting api to achieve this?
- Prefered Technologies
- Environment	Framework
- Backend APIs	Express Js
- Database	MongoDB
- ORM/ODM	Mongoose

Backend Assignment
TODO List for Users
Add User collection to store below user information:
User name
email
phone
created at
updated at
role
Add validation on phone and email from the Mongoose schema itself with error message handling
Link Todo list with User
Create api to get TODO list for User
Create User roles for Admin, App user
User with Admin role should be able to get all Todos
User with App user role, should be able to fetch only his Todo list
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	MongoDB
ORM/ODM	Mongoose

Backend Assignment
TODO List with Authentication
Use Passport Js and add authentication to your App
Create Register and Sign in APIs and on successful signin use Token based authentication
Signed in User should only be able to call the routes
Create a basic html page and serve it using express app
Html page for Register, Sign in and display users Todo list should be created
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	MongoDB
ORM/ODM	Mongoose


Backend Assignment
TODO List with Pagination
Add Pagination on all get routes
Api should be able to take in two fields - page number and no. of records
Pagination should work with existing features
Create an API to get number of registered users for the Day
Create API to get active users for the below:
for current day
for a week
for a month
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	MongoDB
ORM/ODM	Mongoose

Backend Assignment
TODO Aggregation
Create API to get all completed task per Learner
Add Sorting logic to sort by Users who have completed maximum task
Add a collection to store views for Task, likes and ratings
Create one API to get task either by most views, likes and ratings
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	MongoDB
ORM/ODM	Mongoose

Backend Assignment
TODO List with Postgres/Sequelize
Migrate your entire application created in Previous Assignment to use Postgres as DB and Sequelize as ORM
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	Postgres
ORM/ODM	Sequelize

Backend Assignment
TODO with comments and Tags
Add 2 new schemas

One for Comments:

text
created_at
updated_at
posted_by (user_id)
You can create flat comments or nested comments
Another for Tags:

title
created_at
updated_at
category
Every TODO list can have multiple comments

Every Tag can be part of multiple TODO list and every TODO list can have multiple tags

Create APIs for Adding/Updating/Reading Comments on a TODO list

Delete and Update comment should only be allowed for Admin Users or for the user who added the comments

Create APIs for Adding/Updating Tags and on a TODO list

Delete and Update tags should only be allowed for Admin Users

Users can add Tags, update tags on their own TODO list

Update API for TODO list to send comments and tags

Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	Postgres
ORM/ODM	Sequelize


Backend Assignment
Admin API to get User Information
Create an API with access to only Admin Users
Api Should return all information related to every user for the TODO list created by them (Comments, tags, TODO details)
Create an API to return an excel sheet with all the information
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	Postgres
ORM/ODM	Sequelize

Backend Assignment
TODO list with Payment Integration
Create a Cap on the maximum mumber of TODO list that a user can create with a free account
To Create more TODO list, the user will have to make a payment
Add two modes of payments for the app:
Subscription payments on monthly or yearly basis
Microtranscations to get access to additional features, like viewing other person's TODO list
All transactions should be verifiable on successful completion i.e. whenever a transaction is complete we should be able to verify that it was for the correct amount before showing a payment confirmation
Send email or sms on successful payment to the user
Admin should be able to see all these transactions
Users should be able to see the transactions they made
Prefered Technologies
Environment	Framework
Backend APIs	Express Js
Database	Postgres
ORM/ODM	Sequelize
