# Deskbookers Front-end Developer Expert Test

Assignment for a front-end developer position at [deskbookers](https://www.deskbookers.com/nl-nl/search)

## Completed assignment - screenshots:
<img width="1440" alt="screen shot 2018-03-16 at 22 28 59" src="https://user-images.githubusercontent.com/32798242/37545642-d98eb484-2969-11e8-8d29-16a3135142b6.png">
<img width="1440" alt="screen shot 2018-03-16 at 22 28 20" src="https://user-images.githubusercontent.com/32798242/37545643-d9a63370-2969-11e8-9bf8-3e93b2adbe73.png">
<img width="1440" alt="screen shot 2018-03-16 at 22 26 03" src="https://user-images.githubusercontent.com/32798242/37545644-d9c13e40-2969-11e8-813b-a10c15e3d0d4.png">

## Assignment 1: Show Search Results
In this assignment you need to make an Ajax request and show the results on a web page. What you will be showing are search results of our search page. Because of limited time you will only show the results. You don't have to make the search form or filters.

The data for the search results can be found as JSON from the URL: `https://www.deskbookers.com/nl-nl/explore/ajax.json?q=<text>&bounds=<north>|<east>|<south>|<west>`. Both text and bounds are optional arguments.

For this assignment you need to make a page containing the following elements:

* A map (Google Maps for example) showing the items from the result
* A list showing the items from the result with at least the following data visible:
  * The name of the space
  * The name of the venue (location)
  * The city where the space is located
  * Extra data you think is usefull to show aswell

It is up to you to decide which frameworks you want to use (or not). You could think of frameworks like ReactJS, Angular, etc. It is up to you.

As inspiration you can use this page: https://www.deskbookers.com/nl-nl/explore?q=amsterdam
Your version doesn't need to be as extensive as this example.

Make sure the code is clean and robust. This is more important than the amount of features!

## Steps taken:
These are the steps I plan to work on this app:
1. Set up React app and define containers and components
2. Use [Superagent](https://www.npmjs.com/package/superagent) to fetch data from the given URL in JSON format
3. Render list of venues with selected data
4. Set up Google Map
5. Create markers to locate restaurants based on fetched latitudes and longitudes
6. Styling with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables), [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [material-ui@next](https://material-ui-next.com/)
7. Add responsive design for mobile devices (smaller than 400px), ipad (max-width 700px) and large screen (beyong 700px)

## Running Locally

```bash
git clone git@github.com:fandytcc/db-frontend-expert-test.git
cd db-frontend-expert-test
yarn install
yarn start
```

## Related documentation
For more information, see these links:

* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
* [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Superagent](https://www.npmjs.com/package/superagent)
