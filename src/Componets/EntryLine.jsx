import React, { Fragment, useState } from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import ModuleEdit from "./ModuleEdit";

function EntryLine({
  id,
  description,
  value,
  isExpenses = false,
  deleteEntry
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Segment color={isExpenses ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => setIsOpen(true)} />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModuleEdit isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  );
}

export default EntryLine;
