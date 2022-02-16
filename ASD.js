const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("staff.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const flights = JSON.parse(data);

    console.log(flights); // Print users
});



var newStaffDetails = {
    "id":11, 
    "name":"Subhadeep", 
    "age":21,
    "category":"Security",
    "salary":1500,
    "status":"available"
}



fs.writeFile("newstaff.json", JSON.stringify(newStaffDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})