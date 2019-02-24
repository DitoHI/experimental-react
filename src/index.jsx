import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// function ShoppingList({ name }) {
//   return (
//     <div>
//       <h1>
//         Shopping List for
//         { name }
//       </h1>
//       <ul>
//         <li>Instagram</li>
//         <li>WhatsApp</li>
//         <li>Oculus</li>
//       </ul>
//     </div>
//   );
// }

function Square(props) {
  const { onClick, value } = props;
  return (
    <button className="square" onClick={onClick}>
      { value }
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;
    squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({ squares, xIsNext: !xIsNext });
  }

  renderSquare(i) {
    const { squares } = this.state;
    this.square = squares[i];
    return (
      <Square
        value={this.square}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
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
