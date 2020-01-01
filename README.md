# plotly_deploy
Roza feels comfortable with all the elements she’ll use to complete her dashboard, from Plotly to HTML to JavaScript to deployment. You’ll now help her finish the rest of the dashboard.
In this challenge, you will complete the belly button dashboard and deploy a working version to GitHub Pages.  

## Background  
Roza has a partially completed dashboard, but she needs to finish it. She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza’s volunteers will be able to identify whether that species is found in quantity in their navel.
Objectives  

The goals of this challenge are for you to:
- Create a bar chart of the top ten bacterial species in a volunteer’s navel. Use JavaScript to select only the most populous species.
- Create a bubble chart to visualize the relative frequency of all the bacterial species found in a volunteer’s navel.
- Complete the demographic information panel, if you have not done so.
#### Instructions  
Continue working with the samples.json dataset, and complete the following tasks.
When an individual’s ID is selected, the top 10 bacterial species (OTUs) should be visualized with a bar chart. Create a horizontal bar chart to display the top 10 OTUs found in that individual. 
Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hover text for the chart.
Your bar chart should look like the following.

In the Demographics Info panel, display all the key-value pairs of the selected individual’s demographic data. The result should look like the following:
 
Create a bubble chart that displays each sample: 
Use otu_ids for the x-axis values.
Use sample_values for the y-axis values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.
Hint: For more information about creating a bubble chart, see the Plotly documentation
 (Links to an external site.)
.
Your bubble chart should look like this:

When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. In other words, the dashboard should not be blank when a user opens it in a browser.
When a new ID number is selected from the dropdown menu, all the plots and the info panel should be updated.
Customize the layout to create an attractive dashboard. Use your imagination!
The completed project should resemble the following dashboard, though it should not be identical:

Extension
Adapt the gauge chart from Plotly documentation
 (Links to an external site.)
 to plot the weekly washing frequency of the individual. You will need to modify the example gauge code to account for values ranging from 0 through 9. Update the chart whenever a new sample is selected. Your gauge chart should look like this:

Rubric
Please download the detailed rubric to access the assessment criteria.
Submission
Deploy your app to a free static page hosting service. GitHub Pages is recommended. Then, submit the link to the webpage (your deployment) as well as a link to your GitHub repository by pasting both links in the text box. Note that you must include both links in your submission. 
Make sure your repo is up to date and contains the following:
- A README.md file describing your project
- The coding files created during the module:   
    - index.html
    - samples.json
    - plots.js
- A link to the deployed page for your portfolio

