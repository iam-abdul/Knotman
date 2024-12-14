import SwaggerParser from "swagger-parser";

import YAML from "js-yaml"; // Use js-yaml to parse the YAML string

// The contents of the Swagger YAML as a string (you can paste it directly here)
const yamlString = `
openapi: 3.0.0
info:
  title: Example API
  version: 1.0.0
  description: This is a sample API for managing books and user authentication.
servers:
  - url: "http://localhost:3000"
    description: "Local development server"

components:
  schemas:
    LoginRequest:
      type: object
      properties:
        username:
          type: string
        password:
          type: string

    LoginResponse:
      type: object
      properties:
        token:
          type: string

    Book:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        authors:
          type: array
          items:
            type: string
        publisher:
          type: object
          properties:
            name:
              type: string
            year:
              type: integer
        publishedYear:
          type: integer
        genre:
          type: string

    BookListResponse:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        totalCount:
          type: integer
        books:
          type: array
          items:
            $ref: "#/components/schemas/Book"

    BookRequest:
      type: object
      properties:
        title:
          type: string
        authors:
          type: array
          items:
            type: string
        publisher:
          type: object
          properties:
            name:
              type: string
            year:
              type: integer
        publishedYear:
          type: integer
        genre:
          type: string

paths:
  /login:
    post:
      summary: Login to the system
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/LoginRequest"
      responses:
        "200":
          description: Successful login
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/LoginResponse"
        "400":
          description: Invalid credentials

  /books:
    get:
      summary: Get a list of books with pagination
      parameters:
        - in: query
          name: page
          schema:
            type: integer
          required: false
          description: Page number
        - in: query
          name: limit
          schema:
            type: integer
          required: false
          description: Number of items per page
      responses:
        "200":
          description: A list of books
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/BookListResponse"

    post:
      summary: Create a new book
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/BookRequest"
      responses:
        "201":
          description: Successfully created
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Book"
        "400":
          description: Invalid data

  /books/{bookId}:
    get:
      summary: Get book details
      parameters:
        - in: path
          name: bookId
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Book details
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Book"
        "404":
          description: Book not found

`;
async function getResolvedPaths() {
  try {
    // Parse the YAML string into a JavaScript object
    const yamlData = YAML.load(yamlString);

    // Use SwaggerParser to resolve $refs
    const resolvedApi = await SwaggerParser.dereference(yamlData); // Resolve $refs

    // After loading the spec, you can access the paths
    console.log("Resolved Paths:", resolvedApi);
    return resolvedApi;
  } catch (err) {
    console.error("Error resolving or loading Swagger YAML:", err);
  }
}

export default getResolvedPaths;
