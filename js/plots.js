datapath=("./data/samples.json")

function buildMetadata(sample) {
  d3.json(datapath).then(function(data){
    
    console.log(data);
       
    var metadata=data.metadata;
          
    var resultArray=metadata.filter(sampleObj => sampleObj.id == sample);
    
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

//Build Charts
function buildCharts(sample) {
  
  //retrieve json data
  d3.json(datapath).then((data=>{
    var samples =data.samples;
    var resultArray =samples.filter(sampleObj => sampleObj.id == sample);
    var result =resultArray[0];
    
    // Define labels  
    var otu_ids =result.otu_ids;
    
    // Define hovertext 
    var otu_labels=result.otu_labels;

    // Define sample values
    var sample_values=result.sample_values;

    //Build bar chart
      //Define ticks for bar chart
    var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      
      //Define axis and filter top 10 samples for bar chart
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
    var barLayout ={
      title: "Top 10 Cultures Found",
      margin: {t: 60, l: 150}  
    };

    Plotly.newPlot("bar", barData, barLayout);
  
  //Build bubble chart
      //Define labels and margins
    var bubbleChart ={
      title: "Bacteria Cultures Per Sample",
      margin: {t: 0 },
      hovermode: "closest",
      xaxis: {title: "OTU ID"},
      margin: {t:60}
    };

      //Define axis data
    var bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }
    ];
  
    Plotly.newPlot("bubble", bubbleData, bubbleChart);
  })
  

  )};

  function init() {
    // Select selector element
    var selector = d3.select("#selDataset");
  
    //populate selector with names
    d3.json(datapath).then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }

  
function optionChanged(newSample) {
  // Update charts when sample is changed
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

