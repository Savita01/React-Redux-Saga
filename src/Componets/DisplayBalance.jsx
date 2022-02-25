import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ title, value, color, size = "tiny" }) {
  return (
    <Statistic color={color} size={size}>
      <Statistic.Label style={{ textAlign: "left" }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}
export default DisplayBalance;
