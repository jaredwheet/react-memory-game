//imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import PlayerCard from "./components/PlayerCard";
import players from "./baseball.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    players,
    clickedPlayer: [],
    score: 0
  };

//when you click on a card ... the pokemon is taken out of the array
  imageClick = event => {
    const currentPlayer = event.target.alt;
    const PlayerAlreadyClicked =
      this.state.clickedPlayer.indexOf(currentPlayer) > -1;

//if you click on a pokemon that has already been selected, the game is reset and cards reordered
    if (PlayerAlreadyClicked) {
      this.setState({
        player: this.state.players.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available pokemon, your score is increased and cards reordered
    } else {
      this.setState(
        {
          player: this.state.players.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayer: this.state.clickedPlayer.concat(
            currentPlayer
          ),
          score: this.state.score + 1
        },
//if you get all 12 pokemon current you get a message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              player: this.state.players.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPlayer: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, playercard, footer 
  render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.players.map(player => (
            <PlayerCard
              imageClick={this.imageClick}
              id={player.id}
              key={player.id}
              image={player.image}
            />
            ))}
            </div>
          </div>
        );
      }
    }
    export default App;