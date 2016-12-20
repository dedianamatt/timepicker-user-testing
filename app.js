'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;

/*
 * Use Handlebars for templating
 */
var exphbs = require('express-handlebars');
var hbs;

//exphbs.registerPartial('day.partial', '{{day}}');
//exphbs.registerPartial('timecard.partial','{{timecard}}')

// For gzip compression
app.use(express.compress());


/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');

    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
    app.engine('handlebars', exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/views');

    // Locate the assets
    app.use(express.static(__dirname + '/assets'));
}

// Set Handlebars
app.set('view engine', 'handlebars');



/*
 * Routes
 */
// Index Page
app.get('/', function(request, response, next) {
    response.render('index');
});
app.get('/test1a', function(request, response, next) {
    response.render('test1a');
});
app.get('/test1b', function(request, response, next) {
    response.render("test1b");
})
app.get('/test2a', function(request, response, next) {
    response.render("test2a");
});
app.get("/test2b", function(request, response, next) {
    response.render("test2b");
})
app.get('/test3a', function(request, response, next) {
    response.render("test3a");
});
app.get("/test3b", function(request, response, next) {
    response.render("test3b");
});
app.get("/test3c", function(request, response, next) {
    response.render("test3c");
})


/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
