import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onButonClick = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;

      default:
        break;
    }
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" name="good" onClick={this.onButonClick}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.onButonClick}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.onButonClick}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good</p>
          <p>Neutral</p>
          <p>Bad</p>
        </div>
      </>
    );
  }
}
