<p align="center">
  <img width="100%" src="/pics/header.png">
</p>  

# plotly_deploy  

#### Table of Contents

[Project Overview](#project-overview)  
[Resources](#resources)  
[Objectives](#objectives)  
[Summary](#summary)  
[Challenge Overview](#challenge-overview)  
[Challenge Objectives](#challenge-objectives)  
[Challenge Summary](#challenge-summary)  
[Limitations](#limitations)


## Project Overview
In this module, we will use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. The completed work will be displayed in a portfolio we created.  

## Resources  
- **Data Source:** [index.html](/index.html), [samples.json](/samples.json), [plots.js](/plots.js) 
- **Software:** VS Code, Web browser, Command-line interface, GitHub

## Objectives  
By the end of this module, we will be able to:  
- Create basic plots with Plotly, including bar charts, line charts, and pie charts.
- Use D3.json() to fetch external data, such as CSV files and web APIs.
- Parse data in JSON format.
- Use functional programming in JavaScript to manipulate data.
- Use JavaScript’s Math library to manipulate numbers.
- Use event handlers in JavaScript to add interactivity to a data visualization.
- How to use interactivity to enhance your visualizations.
- Deploy an interactive chart to GitHub Pages.  

## Summary  
This is a simple line chart with three data points. The gridlines are supplied automatically.When we place our mouse over the top right corner of the chart, we’ll see a menu appear. It has options such as zoom, zoom out, and pan. This menu also comes with the Plotly library and will be available for every visualization we create.
<img align="left" width="400" height="200" src="/pics/linechart.png">
<img align="left" width="400" height="200" src="/pics/menu.png">
<br/>
<br/>
<br/>
<br/>
<img align="right" width="400" height="200" src="/pics/barchart.png">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/> 
A line chart isn’t suitable for all data visualizations, however. For example, a line chart will generally do a better job of displaying trends, but a bar chart may be more appropriate to visualize how data is distributed across a number of categories.  

<br/>
<img align="left" width="400" height="200" src="/pics/piechart.png">
<br/>
<br/>
A pie chart may be helpful in providing an instant view of the data.  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>  

We deployed a our project to [GitHub Pages](https://shannon-goddard.github.io/plotly_deploy/). We have previously used GitHub to make our code available to the public and to work on projects collaboratively. GitHub offers a free service called GitHub Pages to deploy projects like ours, to run code on a GitHub server to make it viewable to the public. Without a server, anyone who wants to view our dashboard would need to download the project files and run a local server, such as Python’s HTTP server. Behind the scenes, GitHub Pages runs a server app for our project, much like Python’s HTTP server. However, whereas the local Python server makes the dashboard available only for the user of the specific computer on which it is run, GitHub Pages makes it available to anyone with an internet connection and a web browser.
<p align="center">
  <img width="900" height="400" src="/pics/io.png">
</p>  

## Challenge Overview
In this challenge, we have a partially completed dashboard, but need to finish it. We have a completed panel for demographic information and now need to visualize the bacterial data for each volunteer. Specifically, the volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, our volunteers will be able to identify whether that species is found in quantity in their navel.  

## Challenge Objectives  
The goals of this challenge are for us to:
- Create a bar chart of the top ten bacterial species in a volunteer’s navel. Use JavaScript to select only the most populous species.
- Create a bubble chart to visualize the relative frequency of all the bacterial species found in a volunteer’s navel.
- Complete the demographic information panel, if you have not done so.  

## Challenge Summary  
#### Instructions  
Continue working with the samples.json dataset, and complete the following tasks:  

<img align="left" width="400" height="200" src="/pics/top10.png"> When an individual’s ID is selected, the top 10 bacterial species (OTUs) should be visualized with a bar chart. Create a horizontal bar chart to display the top 10 OTUs found in that individual. 
 - Use sample_values as the values for the bar chart.
 - Use otu_ids as the labels for the bar chart.
 - Use otu_labels as the hover text for the chart.  
 
 <br/>
 <br/>
 <br/>
 <br/>
<img align="left" width="400" height="200" src="/pics/id.png"> In the Demographics Info panel, display all the key-value pairs of the selected individual’s demographic data.  

 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
<img align="left" width="400" height="200" src="/pics/bubble.png"> Create a bubble chart that displays each sample: 
 - Use otu_ids for the x-axis values.
 - Use sample_values for the y-axis values.
 - Use sample_values for the marker size.
 - Use otu_ids for the marker colors.
 - Use otu_labels for the text values.

 <br/>
 <br/>
 <br/>
 <br/>
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. In other words, the dashboard should not be blank when a user opens it in a browser.  

<p align="center">
  <img width="900" height="400" src="/pics/base.png">
</p>  

When a new ID number is selected from the dropdown menu, all the plots and the info panel should be updated.  

<p align="center">
  <img width="900" height="400" src="/pics/select.png">
</p>
