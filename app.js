const express = require("express");
const app = express();

const expected_fault_ratio = parseFloat(process.argv.slice(2));
console.log(expected_fault_ratio)

/* serves main page */
app.get("/", function(req, res) {
  const faultiness = Math.random()
  if (faultiness < 0.5) {
    console.log('Fault: '+faultiness)
    res.status(500)
  } else {
    console.log('Success: '+faultiness)
    res.sendFile(__dirname + '/index.html')
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
