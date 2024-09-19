import React from "react";

export default class PokemonCard extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemonName: "",
            pokemonImage: ""
        }
    }

    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        });
    }

    render() {

        // If...Else functionaly identical as return below
        // if (this.state.pokemonName){
        //     return(
        //         <div className="pokemonCard">
        //             <h1>{this.state.pokemonName}</h1>
        //             <img src={this.state.pokemonImage} />
            
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div className="pokemonCard">
        //             <h1>Loading...</h1>
        //         </div>
        //     );
        // }
        
        // Ternary return example
        return(
            <div className="pokemonCard">
                {/* if pokemon name and image exist */}
                {this.state.pokemonName && this.state.pokemonImage ?
                // must return only one element so fragment must be used
                // if condiiton is true...
                <>
                    <h1>{this.state.pokemonName}</h1>
                    <img src={this.state.pokemonImage} />
                </>
                :
                // if condition is false...
                    <h1>Loading...</h1>
                }
            </div>
        );
    }
}


