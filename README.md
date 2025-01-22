Daily Dose: A Node.js Blog Application

This is a Node.js web application built using Express, EJS, Bootstrap, and MongoDB that allows users to:

Sign Up and Sign In: Users can create new accounts and log in to access blog functionalities.
View Existing Blogs: Users can browse through a list of existing blog posts.
Add New Blogs: Authenticated users can create and publish new blog posts.
Comment on Blogs: Users can leave comments on existing blog posts, fostering discussions.

Key Features:

User Authentication: Secure user management with signup, signin, and logout functionalities.
Blog Management: Create, view, and potentially edit (depending on your implementation) blog posts.
Commenting System: Users can interact with blog posts by leaving comments.
MongoDB Integration: Stores blog data and user information in a flexible and scalable NoSQL database.
EJS Templating: Provides a clean and efficient way to structure your web pages.
Bootstrap Styling: Utilizes Bootstrap for responsive and visually appealing design.

Getting Started

Prerequisites:

Node.js and npm (or yarn) installed on your system.
A MongoDB database instance running.

Install Dependencies:
Bash

cd daily-dose-blog-app
npm install (or yarn install)

Configure Database Connection:

Create a .env file in the project root directory.

Add the following environment variable, replacing <your-mongodb-connection-string> with your actual MongoDB connection string:

MONGODB_URI=<your-mongodb-connection-string>

Run the Application:
Bash

npm start (or yarn start)

This will start the Node.js server, typically listening on port 3000 (you can adjust this in your code). Access the application in your browser at http://localhost:3000.