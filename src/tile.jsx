/** @jsx React.DOM */

var Tile = React.createClass({
  canflip: true,
  getInitialState: function() { return {flipped: false}; },
  flip: function(){
    this.setState({flipped:!this.state.flipped});
    this.canflip = false;
    setTimeout((function(){
      this.canflip = true;
    }).bind(this),500);
  },
  render: function() {
    return (
      <div className={'brick'+(this.state.flipped ? ' flipped' : '')}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});