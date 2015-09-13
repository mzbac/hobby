var Router = require('react-router');
var Route = Router.Route;
var React = require("react");
var DefaultRoute  =Router.DefaultRoute;

var HomePage = require("./components/HomePage");


var routes = (
  <Route path="/" handler={HomePage}>
    <DefaultRoute name="DefaultContainer" handler={require("./components/DefaultContainer")} />
    <Route name="test" handler={require("./components/MainContainer")}>
      <Route name="child" handler={require("./components/contents/MainContentTest")} />
    </Route>
  </Route>
);

module.exports =routes;