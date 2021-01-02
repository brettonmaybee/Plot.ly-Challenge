const datapath = "./data/samples.json";

// Fetch the JSON data and console log it
d3.json(datapath).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(datapath);
console.log("Data Promise: ", dataPromise);


  
  