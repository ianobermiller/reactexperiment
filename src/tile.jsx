/** @jsx React.DOM */

var Tile = React.createClass({
  canflip: true,
  getInitialState: function() { return {flipped: false}; },
  flip: function(){
    this.setState({flipped:!this.state.flipped});
  },
  catchClick: function(){
    if (!this.state.flipped){
      this.props.clickedTile(this);
    }
  },
  render: function() {
    return (
      <div className={'brick'+(this.state.flipped ? ' flipped' : '')} onClick={this.catchClick}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});