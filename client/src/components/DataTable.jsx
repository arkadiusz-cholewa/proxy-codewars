import React from "react";
import { Table } from "reactstrap";
import DataTableRow from "./DataTableRow.jsx";
export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const rows = this.props.data.map((dataItem, i) => (
      <DataTableRow key={i} i={i + 1} dataItem={dataItem} />
    ));
    return (
      <Table size="sm" responsive dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Useraname</th>
            <th>Honor</th>
            <th>Clan</th>
            <th>Leaderboard Position</th>
            <th>Overall</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}
