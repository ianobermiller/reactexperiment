/** @jsx React.DOM */

var cx = React.addons.classSet;

var Tile = React.createClass({
  propTypes: {
    word: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {flipped: false};
  },

  catchClick() {
    if (!this.state.flipped) {
      this.props.onClick(this);
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
    return (
      <div
        className={cx({
          'brick': true,
          'flipped': this.state.flipped,
          'correct': this.state.correct,
          'wrong': this.state.wrong,
        })}
        onClick={this.catchClick}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});
