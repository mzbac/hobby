 "use strict"
var React = require("react");


var sidebar = React.createClass({
   render: function(){
     return (
        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <ul className="nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>   
              <li><a href="#" data-toggle="collapse" data-target="#sub1">Link 4 (submenu)</a>
                <ul className="nav collapse" id="sub1">
                  <li><a href="#">Sub Link 1</a></li>
                  <li><a href="#">Sub Link 2</a></li>
                  <li><a href="#">Sub Link 3</a></li>
                </ul>
              </li>
              <li><a href="#">Link 5</a></li>   
            </ul>
        </div>
    );
   } 
});

module.exports =sidebar;
 
 
        