# Technology Blog

## Description
This is a CMS-style blog site based around Technology issues where developers can publish their blog posts and comment on other developers' posts. 


## Table of Contents
* [Installation](#installation)
* [Technology](#technology)
* [Usage](#usage)
* [Credits](#credits)
* [Contact](#contact)


## Installation
Open this application using the website linked below.


## Technology
This application follows the Model-View-Controller paradigm. It uses Handlebars.js for the Views, MySQL2 and Sequelize for the database models and an Express.js back end for the Controller. It also uses bcrypt to hash passwords and express-session and connect-session-sequelize for authentication. It is deployed using Heroku.


## Usage
This website opens on the homepage where existing blog posts can be seen. There is a navigation bar with options for home and login. In order to go to another page, the user must log in or sign up.  Once the user has done so, the navigation bar changes to show buttons for Home, My Page and Logout. When the user clicks on a blog post, the post title, contents, creator's username and date created are shown.  The user can also leave a comment on that post and the post is updated to show the new comment, the comment creator's username and the date created.

When the user clicks on My Page, any blog posts created by the user are displated and the user can add a new blog post by entering a title and contnets. The new post shows up on the dashboard once it is saved. If an already existing post is chosen, that post can be deleted or updated.

The user is signed out after a set period of inactivity or by clicking the Logout button and must sign back in.

## Contact
Contact me at [jdettelback@gmail.com](mailto:jdettelback@gmail.com) if you have any questions.  You can see more of my work at <https://github.com/jdettelback>.


  ![screenshot](https://raw.githubusercontent.com/jdettelback/techblog/main/public/images/screenshottechblog.png)
  
 ![screenshot](https://raw.githubusercontent.com/jdettelback/techblog/main/public/images/screenshottechblog2.png)

 ![screenshot](https://raw.githubusercontent.com/jdettelback/techblog/main/public/images/screenshottechblog3.png)

 ![screenshot](https://raw.githubusercontent.com/jdettelback/techblog/main/public/images/screenshottechblog4.png)

Link to deployed website:

https://techblog-jung.herokuapp.com/
