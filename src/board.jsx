/** @jsx React.DOM */

var Board = React.createClass({
  propTypes: {
    onGameFinished: React.PropTypes.func.isRequired,
    max: React.PropTypes.number.isRequired,
    tiles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },

  getInitialState() {
    return {
      found: 0,
      message: 'choosetile',
    };
  },

  onTileClicked(tile){
    if (this.wait) {
      return;
    }

    // turn up lone tile
    if (!this.flippedtile){
      this.flippedtile = tile;
      tile.reveal();
      this.setState({found: this.state.found, message: 'findmate'});
      return;
    }

    // clicked second
    this.wait = true;
    if (this.flippedtile.props.word === tile.props.word){
      this.setState({found: this.state.found + 1, message: 'foundmate'});
      tile.succeed();
      this.flippedtile.succeed();
    } else {
      this.setState({found: this.state.found, message: 'wrong'});
      tile.fail();
      this.flippedtile.fail();
    }

    setTimeout(
      () => {
        this.wait = false;
        this.setState({found: this.state.found, message: 'choosetile'});
        delete this.flippedtile;
      },
      2000
    );
  },

  render() {
    return (
      <div>
        <button onClick={this.props.onGameFinished}>
          End game
        </button>
        <Status
          found={this.state.found}
          max={this.props.max}
          message={this.state.message}
        />
        {this.props.tiles.map(
          (b, n) => <Tile word={b} key={n} onClick={this.onTileClicked} />
        )}
      </div>
    );
  }
});
