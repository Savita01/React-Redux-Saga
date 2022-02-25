import { Container } from "semantic-ui-react";
import DisplayBalance from "./Componets/DisplayBalance";
import EntryLine from "./Componets/EntryLine";
import MainHeader from "./Componets/MainHeader";
import NewEntryForm from "./Componets/NewEntryForm";
import DisplayBalances from "./Componets/DisplayBalances";

function App() {
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
      <EntryLine description="something" value="12.00" />
      <EntryLine description="something 2" value="43.00" isExpenses />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}
export default App;
