/** @jsx React.DOM */

var Status = React.createClass({
  render: function() {
    var flipped = this.props.flipped,
        max = this.props.max,
        msg = !flipped ? "You haven't flipped any tiles." : flipped === max ? "You have flipped all "+max+" tiles!" : flipped === 1 ? "You have flipped a single tile." : "You have flipped "+flipped+" tiles.";
    return <p>{msg}</p>;
  }
});