## Instructions

Install Postgres, and create a database called "csci39547-server"

Create a .env file, save it inside the repo folder, and create a variable named `LOCAL_DATABASE_PASSWORD='somePassword'`, where `'somePassword'` should be replaced by the password of the "postgres" user in Postgres

Install modules if necessary

Run `npm run dev` in terminal to start the server

## API / Routes

### Campuses
* `GET localhost:5000/campuses` - Returns list of campuses
* `GET localhost:5000/campuses/id` - Returns a specific campus by id number
* `DELETE localhost:5000/campuses/id` - Deletes a campus by id number
* `POST localhost:5000/campuses` - Adds a campus
* `PUT localhost:5000/campuses/id` - Edits a campus by id

### Students
* `GET localhost:5000/students` - Returns list of students
* `GET localhost:5000/students/id` - Returns a specific student by id number
* `DELETE localhost:5000/students/id` - Deletes a student by id number
* `POST localhost:5000/students` - Adds a student
* `PUT localhost:5000/students/id` - Edits a student by id

