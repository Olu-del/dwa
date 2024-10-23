// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 


router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
// Define the /contact route that sends a contact page as a response
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1>'));


// Define the /date route that sends the current date and time as a response
router.get('/date', (req, res) => {
    const currentDate = new Date(); // Get the current date and time
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`); // Send the date and time as a response
});

// Define the /welcome/:name route that sends a personalised welcome message
// New route to show user name
router.get('/welcome/:name', (req, res) => {
    const userName = "John"; // Set the userName to "John"
    res.send(`<h1>Welcome ${userName}</h1>`); //welcome message
});

// Export the router object so index.js can access it
module.exports = router;



