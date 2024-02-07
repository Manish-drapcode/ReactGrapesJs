import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import CreatePage from "./createpage";
import axios from "axios";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { model: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("toggle button");
    this.setState({ model: !this.state.model });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item"></li>
              </ul>

              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={this.handleClick}
              >
                Create New
              </button>
              <Modal isOpen={this.state.model} toggle={this.handleClick}>
                <ModalHeader toggle={this.handleClick}>
                  Create a New Editor{" "}
                </ModalHeader>
                <ModalBody>
                  <CreatePage />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleClick}>
                    close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
