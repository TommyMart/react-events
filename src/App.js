import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    // super calls component class (inheriting)
    super();

    // pre setting data 
    this.state = {
      numberOfPokemon: 6
    }

  }

  exampleLog1 () {
    console.log("Function 1 logging!");
  }

  exampleLog2 () {
    console.log("Function 2 logging!");
  }

  // decreasePokemonNumber(){
  //   if (this.state.numberOfPokemon > 0){
  //     // refer to the previous value and subtract one from state
  //     this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
  //   }
  // }

  // anonymous
  increasePokemonNumber = () => {
    this.setState({ numberOfPokemon: this.state.numberOfPokemon + 1});
  }

  decreasePokemonNumber(){
    // refer to the previous value and increase by one from state
    this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
  }

  render() {
    return(
      // html fragment 
      <>
        <h1>Hello World!</h1>
        <p>Blah blah </p>
        <h2>Number of Pokemon: {this.state.numberOfPokemon}</h2>
        {/* block to call multiple functions on click */}
        <button onClick={() => {
          this.exampleLog1();
          this.exampleLog2();
          this.decreasePokemonNumber();
        }}>
          Decrease Pokemon Amount
        </button>
        {/* one function, not a block */}
        <button onClick={this.increasePokemonNumber}>
          Increase Pokemon Amount
        </button>
      </>
    )
  }
}

export default App;
