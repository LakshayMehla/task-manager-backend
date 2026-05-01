# Task Manager API 🚀

Hey there! Thanks for taking the time to review my technical assignment. 

This is a straightforward REST API built with Node.js and Express that handles basic CRUD operations for a task list. While the app currently uses an in-memory database as requested, I built it with future scalability in mind.

## 🏗️ My Approach & Design Decisions

Even though this is a relatively simple application, I purposely avoided throwing all the logic into a single `server.js` file. Having spent the last three years working in full-stack development—and especially from my experience leading a small engineering team—I've learned firsthand how quickly codebases can become difficult to maintain without clear boundaries. 

Because of that, I went with a standard MVC-style layered architecture:
*   **Separation of Concerns:** I split the codebase into specific folders for `routes`, `controllers`, and `models`. This keeps the HTTP transport logic completely separate from the business logic.
*   **Database Agnostic:** By encapsulating the array inside a `TaskModel`, the controllers don't actually know *how* the data is being stored. If we wanted to swap out the in-memory array for MongoDB or PostgreSQL later, we would only need to update that one model file without touching the rest of the app.
*   **App vs. Server:** I kept the Express app setup (`app.js`) separate from the actual network listener (`server.js`). This is a habit I stick to because it makes writing automated integration tests much easier down the road.
*   **Secure Config:** I used `dotenv` to manage environment variables like the server port, keeping configuration out of the source code.

## 💻 What I Used
*   **Node.js & Express.js** for the core server and routing.
*   **Dotenv** for environment variable management.

## 🛠️ How to Run It Locally

**1. Clone and install dependencies:**
\`\`\`bash
npm install
\`\`\`

**2. Set up your environment:**
Create a `.env` file in the root directory and define the port you want to use:
\`\`\`text
PORT=3000
\`\`\`

**3. Boot it up:**
If you want to run it normally, use:
\`\`\`bash
npm start
\`\`\`
*(Or use `npm run dev` if you want nodemon to automatically restart the server while you poke around the code).*

## 📡 API Endpoints

All routes are prefixed with `/api`.

| Method | Endpoint | What it does | Expected Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/tasks` | Grabs the whole list of tasks | None |
| `GET` | `/api/tasks/:id` | Fetches a single task by its ID | None |
| `POST` | `/api/tasks` | Creates a brand new task | `{ "title": "string", "description": "string", "completed": boolean }` |
| `PUT` | `/api/tasks/:id` | Updates an existing task | `{ "title": "string", "description": "string", "completed": boolean }` |
| `DELETE` | `/api/tasks/:id` | Deletes a task by ID | None |

## 🧪 Testing

Feel free to hit the endpoints using Postman, Insomnia, or just your terminal. Here's a quick cURL command to create your first task:

\`\`\`bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Review assignment", "description": "Check out the new Node API submission", "completed": false}'
\`\`\`

Thanks again for reviewing! 
