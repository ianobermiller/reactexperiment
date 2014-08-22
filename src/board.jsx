/** @jsx React.DOM */
var Board = React.createClass({
  getInitialState: function() { return {flipped: 0}; },
  handleQlick: function(n){
    var brick = this.refs["brick"+n];
    if (brick.canflip){
      brick.flip();
      this.setState({
        flipped: this.state.flipped + (brick.state.flipped ? -1 : 1)
      });
    }
  },
  render: function() {
    return (
      <div>
        <Status flipped={this.state.flipped} max={this.props.bricks.length} />
        {this.props.bricks.map(function(b,n){
          return (<div onClick={this.handleQlick.bind(this, n)} ><Tile word={b} ref={"brick"+n} key={n} /></div>);
        },this)}
      </div>
    );
  }
});