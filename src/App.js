import React, { useState } from "react";

import { Container } from "semantic-ui-react";
import DisplayBalance from "./Componets/DisplayBalance";
import EntryLines from "./Componets/EntryLines";
import MainHeader from "./Componets/MainHeader";
import NewEntryForm from "./Componets/NewEntryForm";
import DisplayBalances from "./Componets/DisplayBalances";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }
  function addEntry(description, value, isExpenses) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpenses
    });
    console.log("result", result);
    console.log("entries", entries);
    setEntries(result);
  }
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
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}
export default App;

var initialEntries = [
  {
    id: 1,
    description: "work income",
    value: "$1000.00",
    isExpenses: false
  },
  { id: 2, description: "water bill", value: "$10.00", isExpenses: true },
  {
    id: 3,
    description: "current bill",
    value: "$20.00",
    isExpenses: true
  },
  {
    id: 4,
    description: "interest",
    value: "$100.00",
    isExpenses: false
  }
];
