# Tours

I created an app that lists travel tours using this tutorial: https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=319s

This is my second React App. I used create-react-app. I practiced using multiple components, useState, useEffect, and fetching data from an API.
Each tour has an image, name, price, information, and a button that toggles between "read more" and "show less" that expands and retracts the information when clicked.  
The tour is removed When the user clicks "not interested."
The text "No Tours Left" appears when all of the tours have been removed.
Clicking refresh returns all of the tours to the app.

## CSS

style.css was copied from the tutorial.

## My personal tweaks:

Replaced "Loading..." text with a loading image.
Gotcha: main width was set to 90vw. Used left: calc(-50vw + 50%) to make image large and center/
Gotcha: hiding overflow of Loading page without hiding overflow of main page.
