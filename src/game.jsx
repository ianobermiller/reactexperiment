/** @jsx React.DOM */

var Game = React.createClass({
  whoami: "game",
  getInitialState: function() { return {playing: false,tiles:[]}; },
  startGame: function(words){
    this.setState({tiles:words.concat(words),playing:true,seed:Math.random()});
  },
  endGame: function(){
    this.setState({playing:false});
  },
  render: function() {
    return (
      <div>
        <div className={this.state.playing ? "showing" : "hidden"}>
          <Board endGame={this.endGame} tiles={this.state.tiles} key={this.state.seed}/>
        </div>
        <div className={this.state.playing ? "hidden" : "showing"}>
          <Wordform startGame={this.startGame} />
        </div>
      </div>
    );
  }
});