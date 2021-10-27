import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Landing} from './Landing';
import {Pyro} from './Pyro';
import {Cryo} from './Cryo';
import {Hydro} from './Hydro';
import {Electro} from './Electro';
import {Geo} from './Geo';
import {Dendro} from './Dendro';
import {Anemo} from './Anemo';
import {Bio} from './Bio';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/pyro">
            <Pyro></Pyro>
          </Route>
          <Route path="/cryo">
            <Cryo></Cryo>
          </Route>
          <Route path="/hydro">
            <Hydro></Hydro>
          </Route>
          <Route path="/electro">
            <Electro></Electro>
          </Route>
          <Route path="/geo">
            <Geo></Geo>
          </Route>
          <Route path="/anemo">
            <Anemo></Anemo>
          </Route>
          <Route path="/dendro">
            <Dendro></Dendro>
          </Route>
          <Route path="/bio">
            <Bio></Bio>
          </Route>
          <Route path="">
            <Landing></Landing>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

// class MyFirstComponent extends React.Component {
//   render() {
//     return (
//       <p>I like bananas</p>
//     )
//   }
// } 

// interface MySecondComponentProps {
//   firstName: string;
//   lastName: string;
// }

// interface MySecondComponentState {
//   numberOfLikes: number;

// }

// class MySecondComponent extends React.Component<MySecondComponentProps, MySecondComponentState> {
//   constructor(props: MySecondComponentProps) {
//     super(props);
//     this.state = {numberOfLikes: 0};
//   }
//   addTheLike() {
//     this.setState({numberOfLikes: this.state.numberOfLikes + 1});
//   }

  
//   render() {
//     return (
//       <div>
//         <p>Test string!</p>

//         <p>My first name is {this.props.firstName} and my last name is {this.props.lastName}</p>

//         <p>This image has {this.state.numberOfLikes} likes</p>

//         <button onClick = {() => this.addTheLike()}> like </button>

//         <img src= "https://i.imgur.com/nVM8ABD.png"></img>

//         </div>
//     )
//   }
// }

export default App;
