import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function ShoppingList({ name }) {
  return (
    <div>
      <h1>
        Shopping List for
        { name }
      </h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
}

class Square extends React.Component {
  render() {
    const { value, clicked } = this.props;
    return (
      <button
        className="square"
        onClick={() => clicked()}
      >
        { value }
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
};

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const { squares } = this.state;
    squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }

  renderSquare(i) {
    const { squares } = this.state;
    this.square = squares[i];
    return (
      <Square
        value={this.square}
        clicked={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    );
  }
}

function Game() {
  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Boards />
        </div>
        <div className="game-info">
          <div />
          <ol />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
