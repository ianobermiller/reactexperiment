/** @jsx React.DOM */

var Board = React.createClass({
  getInitialState: function() { return {found: 0, message: "choosetile"}; },
  clickedTile: function(tile){
    if (!this.wait){
      // turn up lone tile 
      if (!this.flippedtile){
        this.flippedtile = tile;
        tile.flip();
        this.setState({found:this.state.found,message:"findmate"});
      // clicked second
      } else {
        var matched = this.flippedtile.props.word === tile.props.word;
        tile.flip();
        this.wait = true;
        this.setState({found: this.state.found+(matched?1:0),message: matched?"foundmate":"wrong"});
        setTimeout((function(){
          this.wait = false;
          this.setState({found: this.state.found,message: this.state.found === this.props.tiles.length/2 ? "foundall" : "choosetile"});
          if (!matched){
            tile.flip();
            this.flippedtile.flip();
          }
          delete this.flippedtile;
        }).bind(this),2000);
      }
    }
  },
  render: function() {
    return (
      <div>
        <button onClick={this.props.endGame}>End game</button>
        <Status found={this.state.found} max={this.props.tiles.length/2} message={this.state.message} />
        {this.props.tiles.map(function(b,n){
          return <Tile word={b} key={n} clickedTile={this.clickedTile} />;
        },this)}
      </div>
    );
  }
});