const datapath = "./data/samples.json";

//function unpack(rows, index) {
  //  return rows.map(function(row) {
    //  return row[index];
    //});
  //}

function buildPlot() {
  d3.json(datapath).then(function(data) {
  
    // Grab values from the data json object to build the plots
    var metadata = data.metadata;
    var names = data.names;
    var samples = data.samples;
    var sample_values = data.samples.sample_values;
    var otu_ids = data.samples.otu_ids;
    var otu_labels

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: names,
      x: otu_ids,
      y: sample_values,
      line: {
        color: "#17BECF"
      } 
        
    }
    {
      console.log(data);
    };
    
    var data = [trace1];
  
    Plotly.newPlot("plot", data,);

    });
}
buildPlot();