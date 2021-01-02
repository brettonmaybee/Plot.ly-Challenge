const datapath = "./data/samples.json";

//function unpack(rows, index) {
  //  return rows.map(function(row) {
    //  return row[index];
    //});
 // }

 d3.json(datapath).then(function(data){
    console.log(data);
 )}  
//var valuesArray = data.samples.id.sample_values.map(function(item, index) {
//return `Stage ${index}: ${item}`;
//})
 
//console.log(valuesArray);
  

  //sample_values = data.ampless.id.sample_values;
  //console.log(sample_values);



//var sortedData=data.samples.sample_values.sort((a,b)=>b.data.samples.sample_values-a.data.samples.sample_values);

  //  console.log(sortedData);
//});
//
