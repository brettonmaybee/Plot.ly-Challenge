const datapath = "./data/samples.json";
 
function buildMetadata(sample) {
   d3.json(datapath).then(function(data) {
     console.log(data);

    var metadata=data.metadata;
      
    // Filter data in order or greatest to least     
    var resultArray=metadata.filter(sampleObj => sampleObj.id == sample);
    
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");

  PANEL.html("");
  
  Object.defineProperties(result).forEach(([key, value]) => {
    PANEL.append("h6").text('${key.toUpperCase()}: ${value}');
  });

}

//Build Chart
function buildCharts(sample) {
  
  //retrieve json data
  d3.json(datapath).then((data=>{
    var sample =data.samples;
    var resultArray =samples.filter.(sampleObj => sampleObj.id == sample);
    var result =resultArray[0];
    
    // Define labels  
    var otu_ids =result.otu_ids;
    
    // Define hovertext 
    var otu_labels=result.otu_labels;

    // Define sample values
    var sample_values=result.sample_values;

  }))
};
// Promise Pending
// const dataPromise = d3.json(datapath);
// console.log("Data Promise: ", dataPromise);


  
  