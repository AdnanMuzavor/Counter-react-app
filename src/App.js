import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Itemlist from "./components/itemlist";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(){
    super();
    console.log('App - Constructor',this.props);
  }
  componentDidMount(){
    console.log('App-Mounted');
  }
 
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  Decrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handledelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
  render(){
    console.log('App-Rendered');
  }
  render() {
    return (
      <React.Fragment>
        <Itemlist/>
        <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.Decrement}
            onDelete={this.handledelete}
          />
        </main>
        <hr></hr>
       
      </React.Fragment>
    );
  }
}
export default App;
