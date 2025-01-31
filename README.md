## PROJECT DESCRIPTION
* This is public api built with express to fetch user details in json format with status code respond. pai route displays the user email, currentTime in ISO format and a link to this github repository


## SETUP INSTRUCTIONS (to run locally)
* Install the following packges to get started
* mkdir <project_directory_name> on your terminal and cd into it.
* run npm init -y
* npm install node
* npm install express
* npm install cors
* npm install dotenv

create a server file to create the api and setup the server.
* touch server.js

run "node server.js" to start the server

## api documentation
get user details
-----------------------
* method: GET
* api_endpoint: https://openapi-0eed.onrender.com/api

status: OK (200)  
response:   
json  
{  
	email: 'example@gmail.com',  
	current_datetime: "2025-01-31T22:41:55.957Z"   
}  