
"use strict"
var React = require("react");
var Sidebar = require("./SideBar");
var RouteHandler =require('react-router').RouteHandler;

var mainContainer = React.createClass({
   render: function(){
     return (
          <div className="container">
          <div className="row row-offcanvas row-offcanvas-left">
                <Sidebar />
                <RouteHandler />
          </div>
          </div>
    );
   } 
});

module.exports =mainContainer;

