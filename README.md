# Backend Node.js Server Setup Guide

Welcome, Students! This guide will walk you through setting up the backend Node.js server for our project. Follow the steps below to get started.

## Step 1: Download the Server Code

1. Click the `<> Code` button on the top right.
2. Choose the option `Download ZIP` and download the ZIP file.

## Step 2: Extract and Rename

1. Extract the downloaded ZIP file.
2. Rename the extracted folder to "server" (instead of the default name "Server-OutSketch").

## Step 3: Open in VS Code

1. Open the "server" folder in Visual Studio Code.

## Step 4: Check Node.js Version

1. Verify that you have Node.js installed.
2. Ensure you have Node.js version 16.17.1. (You can check your version using `node -v`)

## Step 5: Database Information

### For Xampp and SQL Database

- If you are using Xampp and a SQL database, use the following files:
  - `connect.js`
  - `Task-SQL.js`
  
  **Ignore the following files for Oracle Database:**
  - `database.js`
  - `Task-oracle.js`

### For Oracle Database

- If you are using an Oracle database, use the following files:
  - `database.js`
  - `Task-oracle.js`
  
  **Ignore the following files for Xampp and SQL Database:**
  - `connect.js`
  - `Task-SQL.js`

## Step 6: Install Dependencies

1. Open the VS Code terminal.
2. Navigate to the project folder.
3. Run the command `npm install` to install the required packages.

## Step 7: Install Nodemon

1. If not installed, run the command `npm install nodemon -g` to install Nodemon globally.

## Step 8: Start the Server

1. Run the command `nodemon` in the VS Code terminal.
2. Verify that the log displays "Server up and running."
3. Navigate to `localhost:3000/Task` to perform a GET request and ensure server APIs are functioning.

## Step 9: Features Implementation

Now you are ready to implement the following features:

### 1) Create a Task
- Implement functionality to create a new task.

### 2) Update a Task
- Implement functionality to update an existing task.

### 3) List Today's Tasks
- Implement functionality to list tasks for the current day.

### 4) Delete a Task
- Implement functionality to delete a task.

Feel free to start implementing these features in the provided Node.js server. Good luck with your development!
