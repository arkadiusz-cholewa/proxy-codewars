import React, { Component } from "react";
import DataTable from "./components/DataTable.jsx";
import TopMenu from "./components/TopMenu.jsx";
import _ from "lodash";
import { nicks } from "./nicks";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import { css } from "react-emotion";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
margin: 0 auto;
position: absolute;
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      languages: "Overall",
      selectedLanguage: "Overall",
      hasData: false
    };
  }

  render() {
    if (!this.state.hasData)
      return (
        <div className="App">
          <PacmanLoader className={override} color={"white"} />
        </div>
      );

    return (
      <div className="App">
        <TopMenu
          languages={this.state.languages}
          onChange={e => this.handleLanguageChanged(e)}
        />
        <Container>
          <Row className="mt-3">
            <Col>
              <h1 className={"mb-3"}>{this.state.selectedLanguage}</h1>
              <Row>
                <Col sm="12">
                  <DataTable
                    data={
                      this.state.selectedLanguage === "Overall"
                        ? this.state.data
                        : _.sortBy(
                            this.state.data.filter(d =>
                              d["ranks"]["languages"].hasOwnProperty(
                                this.state.selectedLanguage
                              )
                            ),
                            `ranks.languages.${
                              this.state.selectedLanguage
                            }.score`
                          )
                            .reverse()
                            .map(m => {
                              return {
                                ...m,
                                ranks: {
                                  overall: {
                                    ...m.ranks.languages[
                                      this.state.selectedLanguage
                                    ]
                                  }
                                }
                              };
                            })
                    }
                  />
                </Col>
              </Row>
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
          data = data.filter(f => f.username);
          this.setState({
            data: _.sortBy(data, "ranks.overall.score").reverse(),
            languages: [
              ...new Set([
                this.state.languages,
                ...[].concat.apply(
                  [],
                  data.map(dataItem =>
                    Object.keys(dataItem["ranks"]["languages"])
                  )
                )
              ])
            ],
            hasData: true
          });
        });
      });
  }

  handleLanguageChanged(selectedLanguage) {
    this.setState({ selectedLanguage });
  }
}
