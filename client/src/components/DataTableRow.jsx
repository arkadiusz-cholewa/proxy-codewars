import React from "react";
import { Badge } from "reactstrap";

export default function DataTableRow({ dataItem, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{dataItem.username}</td>
      <td>{dataItem.honor}</td>
      <td>{dataItem.clan}</td>
      <td>{dataItem.leaderboardPosition}</td>
      <td>
        {" "}
        <Badge style={{ backgroundColor: dataItem.ranks.overall.color, color: 'black' }}>
          {dataItem.ranks.overall.name} | {dataItem.ranks.overall.score}
        </Badge>
      </td>
    </tr>
  );
}
