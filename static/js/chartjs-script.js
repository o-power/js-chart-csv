Promise.all([
    d3.csv("static/data/world-population.csv")
]).then(function(files) {
    makeGraphs(files[0]);
}).catch(function(err) {
    console.log(err);
});

function makeGraphs(worldPopulation) {
    // Takes arrays read from CSVs and calls chart functions.

    //console.log(worldPopulation);
    /*
    [{Country: "China", Population: "1394015977"},
    {Country: "India", Population: "1326093247"},
    {Country: "United States", Population: "332639102"},
    {Country: "Indonesia", Population: "267026366"},
    {Country: "Pakistan", Population: "233500636"}]
    */
    //console.log(worldPopulation[0]);
    //console.log(worldPopulation[0].Country);
    //console.log(worldPopulation[0]["Country"]);

    // The forEach() method calls a function once for each element in an array, in order.
    
    worldPopulation.forEach(function(d) {
        d.Population = parseInt(d.Population);
    });

    //console.log(worldPopulation);

    labels_array = [];
    data_array = [];
    for (let i = 0; i < worldPopulation.length; i++) {
        labels_array.push(worldPopulation[i].Country);
        data_array.push(worldPopulation[i].Population);
    }

    drawBarChart(labels_array, data_array);
}

function drawBarChart(labels_array, data_array) {
    // Draws bar chart using Chart.js

    const ctx = document.getElementById("bar-chart");

    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels_array,
            datasets: [
                {
                    label: "Population",
                    data: data_array
                }
            ]
        }
    });
}