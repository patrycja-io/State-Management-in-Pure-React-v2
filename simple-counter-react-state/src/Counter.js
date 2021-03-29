import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
  }

  // You'll need to "open in a new window" to see the title update
  updateDocumentTitle() {
    document.title = this.state.count;
  }

  increment() {
    this.setState((state, props) => {
      const { max, step } = props;
      if (state.count >= max) return;
      return { count: this.state.count + step };
    }, this.updateDocumentTitle);

    console.log('Before!', this.state);
  }

  decrement() {
    this.setState((state, props) => {
      const { step } = props;
      if (state.count <= 0) return;
      return { count: this.state.count - step };
    }, this.updateDocumentTitle);
  }

  reset() {
    this.setState({ count: 0 }, this.updateDocumentTitle);
  }

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

export default Counter;
