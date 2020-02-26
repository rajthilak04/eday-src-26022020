import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';
import { readFileSync } from "fs";

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// Our index.html we"ll use as our template
const template = readFileSync(
  join(DIST_FOLDER, "index.html")
).toString();

const domino = require("domino");
const win = domino.createWindow(template);
global["window"] = win;
global["Document"] = win.document;

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,  
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
app.get('/api/products', (req, res) => {
		var data = [
        {
          "productId": 1,
          "productName": "Black Peppers",
          "productCode": "BP-0011",
          "releaseDate": "March 19, 2019",
          "description": "Crunchy and delicious, an excellent source of vitamins A and C.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "pepper.png",
          "url": "black-pepper"
        },
        {
          "productId": 2,
          "productName": "Jaggery",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "This cross of Chinese kale and broccoli is tender and subtly sweet, with a flavor like asparagus.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "jaggery.png",
          "url": "jaggery"
        },
        {
          "productId": 5,
          "productName": "Sukku",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "A classic veggie. Dip, saut, roast or steam this superfood.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "sukku.png",
          "url": "sukku"
        },
        {
          "productId": 8,
          "productName": "Neotea Field Beans - (Mochai)",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "A versatile winter squash with a sweet, nutty flavor and a smooth, creamy texture.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "neotea.png",
          "url": "neotea"
        },
        {
          "productId": 10,
          "productName": "Urad Dhal",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Luscious seasonal red, yellow or green varieties of this fruit taste delicious.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "uraddal.png",
          "url": "uraddal"
        },
        {
          "productId": 11,
          "productName": "Turmeric",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "A versatile, light veggie that transforms any dish.Low in calories and high in flavor.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "turmeric.png",
          "url": "turmeric"
        },
        {
          "productId": 12,
          "productName": "Ginger",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "A versatile, light veggie that transforms any dish.Low in calories and high in flavor.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "ginger.png",
          "url": "Ginger"
        },
        {
          "productId": 13,
          "productName": "Cardamom",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "A versatile, light veggie that transforms any dish.Low in calories and high in flavor.",
          "fulldescription": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus eget orci sollicitudin posuere. Vivamus odio libero, hendrerit eget sagittis. Donec lacinia eros eget sapien fringilla, amet ultricies metus vulputate. Phasellus tempor dolor eros porttitor ultricies. Nunc vulputate diam ipsum.</p><p>Cras ipsum urna, sodales at orci sit amet, mollis posuere est. Fusce porta odio leo, in ultrices massa pulvinar at. Donec ac risus in odio dictum posuere. Maecenas mollis tortor ipsum, eu scelerisque tortor posuere vel.</p>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "cardamom.png",
          "url": "cardamom"
        }
      ];
	
    res.send(JSON.stringify(data));
});

// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
