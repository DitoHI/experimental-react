import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

interface ISquareProps {
  onClick: any;
  value: string;
}

function Square(props: ISquareProps) {
  const { onClick, value } = props;
  return (
    <button className="square" onClick={onClick}>
      { value }
    </button>
  );
}

function calculateWinner(squares: string[]) {
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

interface IBoardProps {
  squares: string[];
  onClick: any;
}

class Boards extends React.Component<IBoardProps, any> {
  renderSquare(i: number) {
    const { squares, onClick } = this.props;
    const square = squares[i];
    return (
      <Square
        value={square}
        onClick={() => onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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

interface IGameState {
  history: { squares: string[] }[];
  stepNumber: number;
  xIsNext: boolean;
}

class Game extends React.Component<{}, IGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { stepNumber, xIsNext } = this.state;
    let { history } = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{ desc }</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Boards
              squares={current.squares}
              onClick={(i: number) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
