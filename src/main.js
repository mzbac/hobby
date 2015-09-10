$=jQuery = require("jquery");
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});
require("bootstrap");
var React = require("react");
var Router = require('react-router');
var routes = require('./routes');
// var Home = require("./components/HomePage");


// React.render(<Home />, document.getElementById('app'));
Router.run(routes, function(Root){
  
  React.render(<Root />,document.getElementById('app'));
});