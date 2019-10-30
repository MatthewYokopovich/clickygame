import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    counter: 0,
    matched: []
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  shuffleFriends = ()=>{
    var m = friends.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = friends[m];
    friends[m] = friends[i];
    friends[i] = t;
  }
  this.setState({
    friends
  })
}
  handleClick = e=>{
    const newid = e.target.getAttribute("data-id");
    console.log(newid);
    const arr = this.state.matched;
    if(!arr.find(e =>{
      return e===newid;
    })){
      let newcount = this.state.counter + 1;
      arr.push(newid);
      this.setState({
        counter: newcount,
        matched: arr
      })
    }
    else{
      this.setState({
        counter: 0,
        matched: []
      })
    }
    this.shuffleFriends();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Score: {this.state.counter}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
