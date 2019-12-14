import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import './App.css';
import HomepageLayout from './Components/Layout.jsx';
import Footer from './Components/Footer.jsx'
import {Link} from "react-router-dom";

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
            <Image bordered rounded size='medium' src='AC_DP_7.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Link to="/projects"><Button size='huge'>Checkout Our Work</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer/>

    </div>
  );
}

export default Home;
