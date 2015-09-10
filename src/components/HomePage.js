"use strict"
var React = require("react");
var Navbar = require("./TopNavbar");
var MainContainer = require("./MainContainer");
var RouteHandler =require('react-router').RouteHandler;

var homepage = React.createClass({
   render: function(){
     return (
      <div>
      <Navbar brand="React example" />
      <RouteHandler /> 
      </div>
    );
   } 
});

module.exports =homepage;