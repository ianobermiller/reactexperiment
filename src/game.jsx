/** @jsx React.DOM */

var Game = React.createClass({
  getInitialState() {
    return {playing: false, words: []};
  },

  startGame(words) {
    this.setState({
      words: _.shuffle(words.concat(words)),
      playing: true
    });
  },

  reset() {
    this.setState({playing: false});
  },

  render() {
    return this.state.playing ? (
      <Board
        onGameFinished={this.reset}
        words={this.state.words}
        max={this.state.words.length / 2}
      />
    ) : (
      <Wordform onWordsEntered={this.startGame} />
    );
  }
});
