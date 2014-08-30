/** @jsx React.DOM */

var Game = React.createClass({
  getInitialState() {
    return {playing: false, tiles:[]};
  },

  startGame(words) {
    this.setState({
      tiles: _.shuffle(words.concat(words)),
      playing: true,
      seed: Math.random()
    });
  },

  endGame() {
    this.setState({playing: false});
  },

  render() {
    return this.state.playing ? (
      <Board
        endGame={this.endGame}
        tiles={this.state.tiles}
        max={this.state.tiles.length / 2}
        key={this.state.seed}
      />
    ) : (
      <Wordform startGame={this.startGame} />
    );
  }
});
