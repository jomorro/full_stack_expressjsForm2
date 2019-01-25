# Assessment: Create a full-stack application in Express

You'll remember that a server will sometimes need to send HTML as a response body, instead of JSON. We do this to serve client files to the browser. Express has a built-in way of serving static files. 

In this project, you'll see that we follow the convention of keeping our client code in a "/public" folder. Then we use the `express.static(insertPathToStaticFilesHere)` to have Express *automatically* serve the files in that folder. Any file you want the browser to have access to, has to live in this "/public" folder – HTML files, CSS files, client JavaScript files, image files, font files, etc.

Today, you're going to write server code *and* client code in the same project.

## Client Code

### In the HTML file
1. Add email and username input fields to the form. *(1 point)*
2. Add at least two other input fields to the form. Use your own personal experience with user-creation forms as a guide. *(1 point)*

### In `index.js` – this is your client JS
1. Add an event listener to the submit button. *(1 point)*
2. Form submissions have some automated behavior (which you'll be learning about soon). We want to override this behavior. To do this, use `event.preventDefault()` inside your event listener's callback function. *(1 point)*
3. From your callback, write some code to take all of your input fields and put them together into a single User object. *(2 point)*
4. Stringify your User object into JSON. *(1 point)*
5. Write a POST fetch request which sends this JSONified User object to your server code. *(2 point)*
6. When the response comes back, display some sort of "success" message to the user if the status code is 201, and an error message of "Username already taken" if the status code is 409. *(1 point)*

## Server Code

### In `app.js` – this is your server JS
1. Have Express receive a POST request at the path "/api/user/". *(2 point)*
2. Take the username from the incoming JavaScript object, and confirm that the username is not already taken in the users array. *(2 point)*
3. If the username isn't taken:
   - Create a random ID on the user object, then add the user object to the users array. *(1 point)*
   - Set the response status code to 201. *(1 point)*
   - Send a response containing the created user object. *(2 point)*
5. If the username is taken:
   - Set the response status code to 409. *(1 point)*
   - Then send an error object describing the problem. *(1 point)*
