import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

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
  };

  exampleLog2 () {
    console.log("Function 2 logging!");
  };

  // decreasePokemonNumber(){
  //   if (this.state.numberOfPokemon > 0){
  //     // refer to the previous value and subtract one from state
  //     this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
  //   }
  // }
  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0){
          // refer to the previous value and subtract one from state
          this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
  }}

  // anonymous function
  increasePokemonNumber = () => {
    this.setState({ numberOfPokemon: this.state.numberOfPokemon + 1});
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
        
        {/* Create an array with a length equal to state of numberOfPokemon */}
        {
          Array(this.state.numberOfPokemon)
          .fill(null) // fill() just gives each item in the array something, so we can use it properly
          // the actual part that does the loop or repeated action
          .map((element, index) => {
            // repeated action is in this block!
            return <PokemonCard key={index} />
          })
        }

      </>
    )
  }
}

export default App;