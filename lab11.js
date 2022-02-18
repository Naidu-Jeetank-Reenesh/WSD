const express = require("express");
var cors = require("cors");
const fs = require("fs");
var mysql = require('mysql2');

// connecting to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'mms'
});


connection.connect((err) => {
  if (err) { console.log("DB Connection Failed."); return }

  // Initializing Express Server
  const app = express();
  app.use(cors({
    origin: "*",
  }));


  //Routes/Apis
  app.use("/readstaff", async (req, res) => {
    res.end(await fs.readFileSync("staff.json"))
  });


  // display
  app.get("/staff", (req, res) => {
    connection.query("SELECT * FROM customer ;", (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  // search
  app.get("/staff/:cust_id", (req, res) => {
    if (!req.params.cust_id) {
      res.json({ error: "Id required" })
      return
    }
    var cust_id = req.params.cust_id
    connection.query("SELECT * FROM customer WHERE cust_id = " + cust_id, (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  // add
  app.get("/newCustomer", (req, res) => {
  if (!req.query.cust_id) {
     res.json({ error: "Customer not created" })
     return
  }

  if (!req.query.cust_name) {
    res.json({ error: "Name required" })
    return
  }
  if (!req.query.cust_type) {
    res.json({ error: "Type needed to be mentioned" })
    return
  }
  if (!req.query.cust_contact) {
    res.json({ error: "Contact required" })
    return
  }


  connection.query(`INSERT INTO customer(cust_id,cust_name,cust_type,cust_contact) ` +
    `VALUES(${req.query.cust_id},'${req.query.cust_name}','${req.query.cust_type}','${req.query.cust_contact}')`,
    (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  //update
  app.get("/updateCustomer", (req, res) => {
  if (!req.query.cust_id) {
    res.json({ error: "cust_id" })
    return
  }
  if (!req.query.cust_contact) {
    res.json({ error: "Contact required" })
    return
  }
  var cust_id = req.query.cust_id
  var cust_contact = req.query.cust_contact
  connection.query(`UPDATE customer SET cust_contact = '${cust_contact}' WHERE cust_id = '${cust_id}' `, (err, results, fields) => {
    if (err) return res.json({ error: err.message })
    res.json(results)
  })
  })

  //delete
  app.get("/deletecustomer", (req, res) => {
  if (!req.query.cust_id) {
    res.json({ error: "customer No required" })
    return
  }

  var cust_id = req.query.cust_id
  connection.query(`DELETE FROM customer WHERE cust_id = ${cust_id}`, (err, results, fields) => {
    if (err) return res.json({ error: err.message })
    res.json(results)
  })
  })


  //Port
  const port = 8000;

  //Starting a server
  app.listen(port, () => {
    console.log(`* SERVER STARTED AT PORT ${port} *`);
  });

})