import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        locationL:'',
        avatar_url: ''
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/errinku44");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default Profile;
