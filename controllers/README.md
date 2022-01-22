# Books API

Books API with endpoits for getting, creating, updating, and deleting books.

### Endpoints table

| Method | Path         | Purpose                   |
| ------ | ------------ | ------------------------- |
| GET    | `/books`     | Get all books             |
| GET    | `/books/:id` | Get book by ID            |
| POST   | `/books`     | Create new book           |
| PUT    | `/books/:id` | Update a particular place |
| DELETE | `/books/:id` | Delete a particular place |

### Data structure

| Field Name  | Data Type      |
| ----------- | -------------- |
| title       | string         |
| description | string         |
| year        | number         |
| quantity    | number         |
| imageURL    | string (a URL) |
