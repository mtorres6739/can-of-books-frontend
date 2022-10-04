import { Component } from "react";
import { Container } from 'react-bootstrap';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
      <Container>
        <h1>Our Team</h1>
        <p>Our team is made up of two developers who are passionate about learning and building new things. We are currently enrolled in Code Fellows 301 Intermediate Software Development course and are excited to be working on this project together.</p>
        <h2>Team Members</h2>
        <ul>
          <li>Diego Sousa</li>
            <p> Diego is a software developer who is studying at Code Fellows. You can learn more about him at <a href="https://github.com/dmenezessousa">GitHub</a>.</p>
          <li>Mathew Torres</li>
            <p>Mathew is a software developer who is studying at Code Fellows. You can learn more about him at <a href="https://github.com/mtorres6739">GitHub</a>.</p>
        </ul>
      </Container>
      </>
    )
  }
}


export default Profile;
