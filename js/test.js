const datapath = "./data/samples.json";

d3.json(datapath).then(function(data) {
  console.log(data);
});