   "use strict"
var React = require("react");

var topNavbar = React.createClass({
   render: function(){
   return(<div className="navbar navbar-default navbar-fixed-top" role="navigation">
       <div className="container">
    	<div className="navbar-header">
           <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="#">{this.props.brand}</a>
    	</div>
       </div>
    </div>
    );
   } 
});

module.exports =topNavbar;
   
   
   