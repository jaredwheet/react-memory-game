//imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import PlayerCard from "./components/PlayerCard";
import players from "./baseball.json";
import "./App.css";

class App extends Component {
  state = {
    players,
    clickedPlayer: [],
    score: 0
  };


  imageClick = event => {
    const currentPlayer = event.target.alt;
    const PlayerAlreadyClicked =
      this.state.clickedPlayer.indexOf(currentPlayer) > -1;


    if (PlayerAlreadyClicked) {
      this.setState({
        player: this.state.players.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
        alert("Unfortunately - you lose.  Go ahead and play again!");


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
     
        () => {
          if (this.state.score === 12) {
            alert("Impressive - You are a winner!");
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