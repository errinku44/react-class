import React from "react";
import Profile from "./ProfileClass";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){}

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum ❤️😍👍
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;
