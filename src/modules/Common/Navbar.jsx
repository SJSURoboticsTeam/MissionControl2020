import React, { Component } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPlaying: false,
    };
  }

  componentDidMount() {
    this.setState({
      darkThemeActive: this.props.darkThemeActive === "true",
    });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  openFullscreen = () => {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  fullscreenToggle = () => {
    document.fullscreen ? this.closeFullscreen() : this.openFullscreen();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="sm">
          <Container>
            <NavbarBrand href="/">Mission Control 2020</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Button outline
                  color="primary"
                  onClick={() => this.props.toggleDarkTheme()}>
                  Dark Theme
                </Button>
                <NavItem>
                  <NavLink href="#" onClick={this.fullscreenToggle}>
                    Fullscreen
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"https://github.com/SJSURoboticsTeam" +
                    "/MissionControl2020"}
                  target="_blank">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default AppNavbar;
