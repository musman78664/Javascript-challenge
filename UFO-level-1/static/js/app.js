// Create a Variable for the UFO dataset
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO dataset from data.js
console.log(data);
 
// Create a table using the arrow function
  data.forEach((ufoReport) => {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Use HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

 var filterButton = d3.select("#filter-btn");

 // Function to take input and Re-create Table
 filterButton.on("click", function() {
 
    d3.select(".filteredTable").html("");

    // Select the input element and the raw HTML
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

 
   // Filter Data
   var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
   console.log("the filtered data is ", filteredData);

   // loop through
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
   });
 });