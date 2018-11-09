import React from "react";
import { Badge } from "reactstrap";

export default function DataTableRow({ dataItem, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        <a href={`https://www.codewars.com/users/${dataItem.username}`}>{dataItem.username}</a>
      </td>
      <td>{dataItem.clan}</td>
      <td>{dataItem.leaderboardPosition}</td>
      <td>
        {" "}
        <Badge
          style={{
            backgroundColor: dataItem.ranks.overall.color,
            color: "black"
          }}
        >
          {dataItem.ranks.overall.name} | {dataItem.ranks.overall.score}
        </Badge>
      </td>
    </tr>
  );
}
