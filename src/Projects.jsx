import React from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import PhotoGallery from './photo_gallery.jsx'
import './App.css';
import HomepageLayout from './Components/Layout.jsx';
import Footer from './Components/Footer.jsx'

function Projects() {
  return (
    <div>
    <HomepageLayout/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            PROJECTS 
            </Header>
          </Grid.Column>
          <PhotoGallery />
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer/>

    </div>
  );
}

export default Projects;
