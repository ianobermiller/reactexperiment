/** @jsx React.DOM */

var cx = React.addons.classSet;

var Tile = React.createClass({
  propTypes: {
    index: React.PropTypes.number.isRequired,
    isCorrect: React.PropTypes.bool.isRequired,
    isFlipped: React.PropTypes.bool.isRequired,
    isWrong: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    word: React.PropTypes.string.isRequired,
  },

  onClick() {
    if (!this.props.isFlipped) {
      this.props.onClick(this.props.index);
    }
  },

  render() {
    return (
      <div
        className={cx({
          'brick': true,
          'flipped': this.props.isFlipped,
          'correct': this.props.isCorrect,
          'wrong': this.props.isWrong,
        })}
        onClick={this.onClick}>
        <div className="front">?</div>
        <div className="back">{this.props.word}</div>
      </div>
    );
  }
});
