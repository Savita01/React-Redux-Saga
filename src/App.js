import React, { useState } from "react";

import { Container } from "semantic-ui-react";
import DisplayBalance from "./Componets/DisplayBalance";
import EntryLines from "./Componets/EntryLine";
import MainHeader from "./Componets/MainHeader";
import NewEntryForm from "./Componets/NewEntryForm";
import DisplayBalances from "./Componets/DisplayBalances";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance
        title="Your Balance"
        value="1,23,67.00"
        size="small"
        color="black"
      />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}
export default App;

var initialEntries = [
  {
    description: "work income",
    value: "$1000.00",
    isExpenses: false
  },
  {
    description: "water bill",
    value: "$10.00",
    isExpenses: true
  }
];
