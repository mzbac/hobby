var Router = require('react-router');
var Route = Router.Route;
var React = require("react");
var DefaultRoute  =Router.DefaultRoute;

var HomePage = require("./components/HomePage");


var routes = (
  <Route path="/" handler={HomePage}>
    <DefaultRoute name="mainContainer" handler={require("./components/MainContainer")} >
     
    </DefaultRoute>
    <Route name="test" handler={require("./components/MainContainer2")}>
      <Route name="child" handler={require("./components/MainContentTest")} />
    </Route>
  </Route>
);

module.exports =routes;