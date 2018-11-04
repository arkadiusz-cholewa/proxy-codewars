import React, { Component } from "react";
import DataTable from "./components/DataTable.jsx";
import TopMenu from "./components/TopMenu.jsx";
import _ from "lodash";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

const nicks = ["arkadiusz-cholewa", "Xanner", "Arathon"];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasData: false
    };
  }

  render() {
    if (!this.state.hasData) return <h1>loading...</h1>;
    return (
      <div className="App">
        <TopMenu />
        <Container>
          <Row className="mt-3">
            <Col>
              <DataTable data={this.state.data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    const promises = nicks.map(nick =>
      fetch(`https://proxy-codewars.herokuapp.com/users/${nick}`)
    );
    Promise.all(promises)
      .then(responses => responses.map(response => response.json()))
      .then(responses => {
        Promise.all(responses).then(data => {
          this.setState({
            data: _.sortBy(data, "ranks.overall.score").reverse(),
            hasData: true
          });
        });
      });
  }
}
