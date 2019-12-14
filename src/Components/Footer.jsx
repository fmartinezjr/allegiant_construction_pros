import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link inverted>

                <List.Item><Link to="/">Home</Link></List.Item>
                <List.Item><Link to="/about">About</Link></List.Item>
                <List.Item><Link to="/services">Services</Link></List.Item>
                <List.Item><Link to="/projects">Projects</Link></List.Item>



              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted >
              Allegiant Construction & Drywall Professionals
              </Header>
              <p>
                Phone: 915-342-2295
              </p>
              <p>
               allegiantconstructiondesign@gmail.com
               </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  )
  
  export default Footer



   