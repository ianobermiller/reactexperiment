/** @jsx React.DOM */

var Board = React.createClass({
  getInitialState: function() { return {found: 0, message: "choosetile"}; },
  clickedTile: function(tile){
    if (!this.wait){
      // turn up lone tile 
      if (!this.flippedtile){
        this.flippedtile = tile;
        tile.flipAndSearch();
        this.setState({message:"findmate"});
      // clicked second
      } else {
        this.wait = true;
        if (this.flippedtile.props.word === tile.props.word){
          this.setState({found: this.state.found+1,message: "foundmate"});
          tile.revealAndSucceed();
          this.flippedtile.marryNewlyfound();
        } else {
          this.setState({message:"wrong"});
          tile.revealAndFail();
          this.flippedtile.hideInSorrow();
        }
        setTimeout((function(){
          this.wait = false;
          this.setState({message:this.state.found===this.props.max ? "foundall" : "choosetile"});
          delete this.flippedtile;
        }).bind(this),1200);
      }
    }
  },
  render: function() {
    return (
      <div>
        <button onClick={this.props.endGame}>End game</button>
        <Status found={this.state.found} max={this.props.max} message={this.state.message} />
        {this.props.tiles.map(function(b,n){
          return <Tile word={b} key={n} clickedTile={this.clickedTile} />;
        },this)}
      </div>
    );
  }
});