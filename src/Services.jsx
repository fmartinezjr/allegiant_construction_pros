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

function Services() {
  return (
    <div>
    <HomepageLayout/>
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h2' style={{ fontSize: '2em' }}>
          SERVICES WE OFFER
          </Header>
          <div role="list" class="ui list">
          <div role="listitem" class="item"><h2>Drywall Specialist</h2></div>
          <div role="listitem" class="item"><h2>New Construction</h2></div>
          <div role="listitem" class="item"><h2>Commerical</h2></div>
          <div role="listitem" class="item"><h2>Residential</h2></div>

          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div role="list" class="ui list">
          <div role="listitem" class="item"><h2>Custom Homes</h2></div>
          <div role="listitem" class="item"><h2>Remodeling</h2></div>
          <div role="listitem" class="item"><h2>New Additions</h2></div>
          <div role="listitem" class="item"><h2>Demolition</h2></div>
          </div>
        </Grid.Column>
       
      </Grid.Row>

    </Grid>
  </Segment>
    <Footer/>

    </div>
  );
}

export default Services;
