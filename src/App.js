import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
      picture: '',
      name: '',
    }
  }

  handlerUpdatePicture(pictureLocation) {
    this.setState({
      picture: pictureLocation
    })
  }

  handlerUpdateName(newName) {
    this.setState({
      name: newName
    })
  }

  handlerAddFriend() {
    let {friends:friendsList, name, picture} = this.state
    friendsList.push({friendsName: name, friendsPicture: picture})

    this.setState({
      friends: friendsList,
      name: '',
      picture: '',
    })
  }

  render() {
    const friends = this.state.friends.map((friend, index) => {
      return (
        <div key={index}>
          <img
          src={friend.friendsPicture} 
          alt='imageNotFound: '
          />
          <span>{friend.friendsName}</span>
        </div>
      )
    });
    return (
      <div className="App">
        <label>Picture: </label>
        <input 
        onChange={(e) => this.handlerUpdatePicture(e.target.value)}
        value={this.state.picture}
        />
        <label>Name: </label>
        <input 
        onChange={(e) => this.handlerUpdateName(e.target.value)}
        value={this.state.name}
        />
        <button onClick={() => this.handlerAddFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
