function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

    // BONUS: Build the Gauge Chart
    buildGauge(result.wfreq);
  });
}


//Build Chart
     function buildCharts(sample) {
       //retrieve json data      
       d3.json("data/samples.json").then((data => {
         var sample = data.samples;
         var resultArray = samples.filter.(sampleObj => sampleObj.id == sample);
         var result = resultArray[0];

         // Define labels  
         var otu_ids = result.otu_ids;

         // Define hovertext 
         var otu_labels = result.otu_labels;

         // Define sample values
         var sample_values = result.sample_values;

         //Build bar chart
         //Define and filter top 10 samples for bar chart
         var barData = [
           {
             y: yticks,
             x: sample_values.slice(0, 10).reverse(),
             text: otu_labels.slice(0, 10).reverse(),
             type: "bar",
             orientation: "h",
           }
         ];

         //Set title and margins bar chart
         var barLayout = {
           title: "Top 10 Cultures Found",
           margin: { t: 60, l: 150 }
         };

         Plotly.newPlot("bar", barData, barLayout);
       }));
     }

// Promise Pending
// const dataPromise = d3.json(datapath);
// console.log("Data Promise: ", dataPromise);