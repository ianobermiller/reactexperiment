/** @jsx React.DOM */

var Tile = React.createClass({
  getInitialState: function() { return {flipped: false}; },
  catchClick: function(){
    if (!this.state.flipped){
      this.props.clickedTile(this);
    }
  },
  flipAndSearch: function(){
    this.setState({flipped:true});
  },
  hideInSorrow: function(){
    setTimeout((function(){
      this.setState({flipped:false});
    }).bind(this),2000);
  },
  revealAndFail: function(){
    this.setState({flipped:true});
    setTimeout((function(){this.setState({flipped:false})}).bind(this),2000);
  },
  revealAndSucceed: function(){
    this.setState({flipped:true});
  },
  marryNewlyfound: function(){

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