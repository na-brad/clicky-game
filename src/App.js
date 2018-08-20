import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Container from "./components/Container"
import Car from "./components/Car"
import cars from "./cars.json"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    topScore: 0,
    currentScore: 0,
    cars: cars,
    unselectedCars: cars,
    message: "Click to start!"
  };

  shuffleCars = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  checkCar = id => {
    const car = this.state.unselectedCars.find(element => element.id === id);
    if(car=== undefined){
      this.setState({ 
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        cars: cars,
        unselectedCars: cars,
        message: "You lose! Click to play again"
      });
    }else {
      const filteredCars = this.state.unselectedCars.filter(car => car.id !== id);

      this.setState({
        currentScore: this.state.currentScore + 1,
        unselectedCars: filteredCars,
        message: "Correct guess!"
      });
    }
    this.shuffleCars(cars)
  }

  render() {
    return (
      <div>
        <Navbar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        message={this.state.message}
        />
        <Header />
        <Container>
          {this.state.cars.map(car => (
            <Car
              name={car.name}
              image={car.image}
              id={car.id}
              check={this.checkCar}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
