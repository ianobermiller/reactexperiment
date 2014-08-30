/** @jsx React.DOM */

var Wordform = React.createClass({
  propTypes: {
    startGame: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {error: ""};
  },

  setError(msg) {
    this.setState({error: msg});
    setTimeout(
      () => this.setState({error: ""}),
      2000
    );
  },

  submitWords(e) {
    var node = this.refs["wordfield"].getDOMNode(),
        words = (node.value || "").trim().replace(/\W+/g," ").split(" ");
    if (words.length <= 2) {
      this.setError("Enter at least 3 words!");
    } else if (words.length !== _.unique(words).length) {
      this.setError("Words should be unique!");
    } else if (words.filter(w => w.length > 8).length) {
      this.setError("Words should not be longer than 8 characters!");
    } else {
      this.props.startGame(words);
      node.value = "";
    }
    return false;
  },

  render() {
    return (
      <form onSubmit={this.submitWords}>
        <p>Enter words separated by spaces!</p>
        <input type='text' ref='wordfield' />
        <button type='submit'>Start!</button>
        <p className='error' ref='errormsg'>{this.state.error}</p>
      </form>
    );
  }
});
