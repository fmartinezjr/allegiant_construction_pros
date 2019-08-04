import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import './App.css';
import HomepageLayout from './Components/Layout.jsx';
import Footer from './Components/Footer.jsx'

function Home() {
  return (
    <div>
    <HomepageLayout/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            OUR COMMITMENT
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Our company is committed to providing top quality service. We guarantee customer satisfaction through our quality work and focus on the customer.
            </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='medium' src='/AC&DP_7.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as='a' href='/projects'size='huge'>Check Out Our Work</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer/>

    </div>
  );
}

export default Home;
