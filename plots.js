function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildBarChart(newSample);
  buildGaugeChart(newSample);
  buildBubbleChart(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(key.toUpperCase() + ': ' + value); 
    })


  });
}

function buildBarChart(sample) {
  d3.json("samples.json").then((data) => {
    var resultArray = data
    .samples
    .filter(sampleObj => {
      return sampleObj.id == sample
    });
    
    var result = resultArray[0];
    var top_ten_otu_ids = result.otu_ids.slice(0, 10).map(numericIds => {
      return 'OTU ' + numericIds;
    }).reverse();
    
    var top_ten_sample_values = result.sample_values.slice(0, 10).reverse();
    var top_ten_otu_labels = result.otu_labels.slice(0, 10).reverse();
    
    var bar_trace = [
      {
        x: top_ten_sample_values,  
        y: top_ten_otu_ids,
        text: top_ten_otu_labels,
        name: "Top 10",
        type: 'bar',
        orientation: 'h'
      }
      ];

      var data = [bar_trace];

      var bar_layout = {
        title: "Top 10 OTUs",
   
      };
      
      Plotly.newPlot('bar', bar_trace, bar_layout)
    
    });
  }
  
  function buildGaugeChart(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata
      .filter(sampleObj => {
        return sampleObj.id == sample
      });
      console.log(resultArray);

      var result = resultArray[0];
      console.log(result);
      var wash_freq = result.wfreq;
      console.log(wash_freq);

      
      var gauge_trace = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wash_freq,
          title: {text: "Belly Button Washing Frequency <br> Scrubs per Week", font: {size: 18}},
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 10]},
            bar: { color: "steelblue" },
            steps: [
              { range: [0, 1], color: 'rgba(0, 0, 0, 0.5)' },
              { range: [1, 2], color: 'rgba(0, 0, 0, 0.5)' },
              { range: [2, 3], color: 'rgba(183,28,28, .5)' },
              { range: [3, 4], color: 'rgba(183,28,28, .5)' },
              { range: [4, 5], color: 'rgba(249, 168, 37, .5)' },
              { range: [5, 6], color: 'rgba(249, 168, 37, .5)' },
              { range: [6, 7], color: 'rgba(110, 154, 22, .5)' },
              { range: [7, 8], color: 'rgba(110, 154, 22, .5)' },
              { range: [8, 9], color: 'rgba(14, 127, 0, .5)' },
              { range: [9, 10], color: 'rgba(14, 127, 0, .5)' }
            ],
          }  
        }
      ];
      
      var gauge_layout = {
        
        
        width: 600, 
        height: 500, 
        margin: { t: 0, b: 0 }
      };
      
      Plotly.newPlot('gauge', gauge_trace, gauge_layout)
    
    });
  
  }

    function buildBubbleChart(sample) {
      d3.json("samples.json").then((data) => {
        var resultArray = data
        .samples
        .filter(sampleObj => {
          return sampleObj.id == sample
        });
        
        var result = resultArray[0];
        
        var otu_ids = result.otu_ids.map(numericIds => {
          return numericIds;
        }).reverse();
        
        var sample_values = result.sample_values.reverse();
        var otu_labels = result.otu_labels.reverse();
        
        var bubble_trace = {
          
          x: otu_ids,  
          y: sample_values,
          text: otu_labels,
          mode: 'markers',
          marker: {
            color: otu_ids,
            size: sample_values

          }
        };
    
          var data = [bubble_trace];
    
          var bubble_layout = {
            title: "OTU ID",
            showlegend: false,

          };
          
          Plotly.newPlot('bubble', data, bubble_layout)
        
        });
      }
