import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon
} from "semantic-ui-react";
function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>25500</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>122222</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>122222</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Histary</Header>
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
    </Container>
  );
}
export default App;
