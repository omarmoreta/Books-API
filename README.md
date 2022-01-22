# Books API

Books API with endpoits for getting, creating, updating, and deleting books.

### Endpoints table

| Method | Path         | Purpose                  |
| ------ | ------------ | ------------------------ |
| GET    | `/books`     | Get all books            |
| GET    | `/books/:id` | Get a particular book    |
| POST   | `/books`     | Create new book          |
| PUT    | `/books/:id` | Update a particular book |
| DELETE | `/books/:id` | Delete a particular book |

### Data structure

| Field Name  | Data Type      |
| ----------- | -------------- |
| title       | string         |
| description | string         |
| year        | number         |
| quantity    | number         |
| imageURL    | string (a URL) |
