/** @jsx React.DOM */

var Board = React.createClass({
  getInitialState: function() { return {nbrofflipped: 0}; },
  handleQlick: function(n){
    var brick = this.refs["brick"+n];
    if (brick.canflip){
      brick.flip();
      this.setState({
        nbrofflipped: this.state.nbrofflipped + (brick.state.flipped ? -1 : 1)
      });
    }
  },
  render: function() {
    return (
      <div>
        <button onClick={this.props.endGame}>End game</button>
        <Status nbrofflipped={this.state.nbrofflipped} max={this.props.tiles.length} />
        {this.props.tiles.map(function(b,n){
          return (<div onClick={this.handleQlick.bind(this, n)} key={n}><Tile word={b} ref={"brick"+n} /></div>);
        },this)}
      </div>
    );
  }
});