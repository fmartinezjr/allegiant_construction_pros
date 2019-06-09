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

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image bordered rounded centered size='large' src='/AC&DP_LOGO_1.png' />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'href='/'>Home</Menu.Item>
                <Menu.Item as='a' href='/about'>About Us</Menu.Item>
                <Menu.Item as='a' href='/services'>Services</Menu.Item>
                <Menu.Item as='a' href='/projects'>Projects</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a'href='/'>Home </Menu.Item>
          <Menu.Item as='a' href='/about'>About Us</Menu.Item>
          <Menu.Item as='a' href='/services'>Services</Menu.Item>
          <Menu.Item as='a' href='/projects'>Projects</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Services = () => (
  <ResponsiveContainer>
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

 <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <List link inverted>
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
</ResponsiveContainer>

)

export default Services