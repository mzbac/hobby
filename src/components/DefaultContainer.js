
"use strict"
var React = require("react");
var Sidebar = require("./SideBar");
var MainContent = require("./contents/MainContent");

var mainContainer = React.createClass({
   render: function(){
     return (
          <div className="container">
          <div className="row row-offcanvas row-offcanvas-left">
                <Sidebar />
                <MainContent />
          </div>
          </div>
    );
   } 
});

module.exports =mainContainer;

