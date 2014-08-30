/** @jsx React.DOM */

var Status = React.createClass({
  propTypes: {
    found: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    message: React.PropTypes.string.isRequired,
  },

  render() {
    var found = this.props.found,
        max = this.props.max,
        texts = {
          choosetile: 'Choose a tile!',
          findmate: 'Now try to find the matching tile!',
          wrong: 'Sorry, those didn\'t match!',
          foundmate: 'Yey, they matched!',
          foundall: 'You\'ve found all ' + max + ' pairs! Well done!'
        };
    return (
      <p>
        ({found}/{max})&nbsp;&nbsp;
        {texts[
          this.props.message === 'choosetile' && found === max ?
            'foundall' :
            this.props.message
        ]}
      </p>
    );
  }
});
