/** @jsx React.DOM */

var Tile = React.createClass({
  getInitialState: function() {
    return {flipped: false};
  },
  catchClick: function(){
    if (!this.state.flipped){
      this.props.clickedTile(this);
    }
  },
  reveal: function(){
    this.setState({flipped:true});
  },
  fail: function(){
    this.setState({flipped:true,wrong:true});
    setTimeout((function(){this.setState({flipped:false,wrong:false});}).bind(this),2000);
  },
  succeed: function(){
    this.setState({flipped:true,correct:true});
  },
  render: function() {
    var classes = _.reduce(["flipped","correct","wrong"],function(m,c){return m+(this.state[c]?c+" ":"");},"",this);
    return (
      <div className={'brick '+(classes || '')} onClick={this.catchClick}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});