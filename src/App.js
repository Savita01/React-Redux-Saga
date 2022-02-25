import { Container, Grid, Segment, Statistic, Icon } from "semantic-ui-react";
import DisplayBalance from "./Componets/DisplayBalance";
import MainHeader from "./Componets/MainHeader";
import NewEntryForm from "./Componets/NewEntryForm";

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

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="income" value="1,045.50" color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expence" value="653.50" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something2
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $20,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something3
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $30,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title=" Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}
export default App;
