"use strict"
var React = require("react");

var mainContent = React.createClass({
 getInitialState: function() {
  return {
   friends: ['peter','andrew','john']
  };
 },
 render: function() {
  return (

   <div className="col-xs-12 col-sm-9 mainContent">
         <form role="form"method="post" >
         <h3>Select your friend to share your location</h3>
         <div className="form-group">
             <select className="form-control" name="friendId">
             {this.state.friends.map(function(result){
              return <option>{result}</option>
             })}
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Share</button>
        </form>
        </div>
  );
 }
});

module.exports = mainContent;