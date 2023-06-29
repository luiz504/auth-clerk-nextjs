# NextJS and Clerk Authentication Integration Tests

This project is a small example of integrating authentication and user management using NextJS and Clerk. NextJS is a React framework for building web applications, and Clerk is an authentication and user management platform.

## Features

- User authentication using Clerk
- Session and authentication token management
- Protected authenticated routes

## Prerequisites

Before getting started, you need to have a Clerk account and set up your project with the necessary API keys. Additionally, make sure you have Node.js, npm (or yarn), and Turbo installed on your machine.

## How to Run the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Install the project dependencies by running pnpm install (or npm install or yarn install).
4. Configure your Clerk API Keys, /apps/web/.env.local and the /apps/server/env.
5. In the project root terminal run the command to start both the web and server apps: concurrently.

```bash
   pnpm dev
```

6. Access the application in your browser at the specified URL.
7. Feel free to explore and test the authentication integration with NextJS and Clerk in this project.
