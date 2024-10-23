//setting up express
const express = require ("express");
const app = express();
const port = 8081;


const mainRoutes = require("./routes/main");  

app.use('/', mainRoutes);


// Define the root route that sends "Hello World!" as a response
app.get("/", (req, res) => res.send("Hello World!"));

// Define the /about route that sends an about page as a response
app.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));

// Define the /contact route that sends a contact page as a response
app.get('/contact', (req, res) => res.send('<h1>This is contact page</h1>'));

// Define the /date route that sends the current date and time as a response
app.get('/date', (req, res) => {
    const currentDate = new Date(); // Get the current date and time
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`); // Send the date and time as a response
});


// Define the /welcome/:name route that sends a personalised welcome message
// New route to show user name
app.get('/welcome/:name', (req, res) => {
    const userName = "John"; // Set the userName to "John"
    res.send(`<h1>Welcome ${userName}</h1>`); //welcome message
});
    
// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 

