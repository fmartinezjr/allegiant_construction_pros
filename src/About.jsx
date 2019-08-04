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

function About() {
  return (
    <div>
    <HomepageLayout/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            ABOUT US
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            We are a family owned and operated construction company that specializes in drywall. We are proud to serve the Colorado Rockies. In addition to high end drywall finishes we also provide custom construction services. We are always looking forward to satisfying our clients, giving them 100% quality. We pride ourselves on our attention to detail. Call us today for expert estimates. We are a strong team. No project is a problem. You can count on our team. </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='medium' src='/AC&DP_7.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer/>

    </div>
  );
}

export default About;
