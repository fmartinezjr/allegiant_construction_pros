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

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link inverted>
              <List.Item as='a' href='/'>Home</List.Item>
                <List.Item as='a' href='/about'>About</List.Item>
                <List.Item as='a' href='/services'>Services</List.Item>
                <List.Item as='a' href='/projects'>Projects</List.Item>
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



   