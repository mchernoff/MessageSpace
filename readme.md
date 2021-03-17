# MessageSpace

MessageSpace is an application that allows messages to be posted and viewed on a board.

Each post has a title, content, and a timestamp. Post previews are organized in the sidebar by latest timestamp.
Selecting a post will display its full content and all of its replies.

The posts can be replied to, but reply posts cannot be replied to individually - they form a single thread
under the main post. They have content and a timestamp but not a title.

Posts and replies can be created, and deleted, by anyone.

Author: Matthew Chernoff for C Space interview
chernoff.matthew@gmail.com

# Getting started

The project contains a front-end in the "app" folder, and a back-end in the "api" folder.
Open a command prompt for each directory. 

Under "app", run:
npm install
npm start

Under "api", run:
npm install
node server.js

You should have a Node.js version of ^12.19.0 and an NPM version of ^6.14.8

https://nodejs.org/
https://www.npmjs.com/

The client will run on localhost:3000.
It will also specify a proxy for the back-end's port (3010), so there are no cross-origin resource sharing (CORS) 
issues when viewing the client on a browser.

# Tech stack

This project is built on JavaScript using the frameworks React.js, React-Bootstrap, Express.js, and NeDB.

React is used to build the front-end. The page elements are largely built of class components.
React-Bootstrap components are used for styled button and form controls.

Express is used to build the server. It contains endpoints to create new posts, get posts, get replies to a post,
delete a post, and delete all posts.
NeDB is used on the server to persist data storage and provide simple querying. 
It was chosen for its lightweight embedded database capability.

https://reactjs.org/
https://react-bootstrap.github.io/
https://expressjs.com/
https://github.com/louischatriot/nedb