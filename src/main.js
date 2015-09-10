$=jQuery = require("jquery");
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});
require("bootstrap");
//var React = require("react");
//var Home = require("./components/HomePage");



//React.render(<Home />, document.getElementById('app'));