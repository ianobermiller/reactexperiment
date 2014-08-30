/** @jsx React.DOM */

var Tile = React.createClass({
  propTypes: {
    word: React.PropTypes.string.isRequired,
    clickedTile: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {flipped: false};
  },

  catchClick() {
    if (!this.state.flipped) {
      this.props.clickedTile(this);
    }
  },

  reveal() {
    this.setState({flipped: true});
  },

  fail() {
    this.setState({flipped: true, wrong: true});
    setTimeout(
      () => this.setState({flipped: false, wrong: false}),
      2000
    );
  },

  succeed() {
    this.setState({flipped: true, correct: true});
  },

  render() {
    var classes = ["flipped", "correct", "wrong"].reduce(
      (m,c) => m + (this.state[c] ? c + " " : ""),
      ""
    );
    return (
      <div className={'brick ' + (classes || '')} onClick={this.catchClick}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});
