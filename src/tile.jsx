/** @jsx React.DOM */

var Tile = React.createClass({
  getInitialState: function() { return {}; },
  catchClick: function(){
    if (!this.state.flipped){
      this.props.clickedTile(this);
    }
  },
  flipAndSearch: function(){
    this.setState({flipped:true});
  },
  hideInSorrow: function(){
    this.setState({flipped:true,wrong:true});
    setTimeout((function(){this.setState({flipped:false,wrong:false});}).bind(this),1200);
  },
  revealAndFail: function(){
    this.setState({flipped:true,wrong:true});
    setTimeout((function(){this.setState({flipped:false,wrong:false});}).bind(this),1200);
  },
  revealAndSucceed: function(){
    this.setState({flipped:true,correct:true});
  },
  marryNewlyfound: function(){
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