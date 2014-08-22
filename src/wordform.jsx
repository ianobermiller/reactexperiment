/** @jsx React.DOM */

var Wordform = React.createClass({
  getInitialState: function(){return {error:""};},
  submitWords: function(e){
    var node = this.refs["wordfield"].getDOMNode(),
        words = (node.value || "").split(" ");
    if (words.length > 2) {
      this.props.startGame(words);
      node.value = "";
    } else {
      this.setState({error:"Enter at least 3 words!"});
      setTimeout((function(){
        this.setState({error:""});
      }).bind(this),2000);
    }
    return false;
  },
  render: function() {
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