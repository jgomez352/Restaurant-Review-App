# Restaurant-Review-App
Udacity Front-End Web Developer Nanodegree Assignment

----

## Objective
The objective of this program is to create a page that loads from cache, using service workers and DB helpers.

## Running the page

Running Python server helps you test most of the page functions.  Holding "Ctrl"+"F5" to refresh the page is a must! To test the service worker you will need to use "Web Server for Chrome", Python just did not work. With the code having no issues, you will have MIME type error if you use the Python Server to test the service worker.

## Code Notes

----

### JS File

There are 4 js files in the program.  3 in the js folder and one in the main root.  The one seeting in the main root is the service worker js file (sw.js).

### Dependencies

#### Map
Udacity provide starter code for both google maps and leaflet.  It was my choice to use leafelet for this project, but im planning to try the goolge maps setup next.

#### Other

1. https://unpkg.com/leaflet@1.3.1/dist/leaflet.css

2. //normalize-css.googlecode.com/svn/trunk/normalize.css

#### Data

JSON file is parsed to make the page work.

----