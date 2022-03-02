import React, { useState } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setvalue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="doller"
          iconPosition="left"
          value={value}
          onChange={(event) => setvalue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is Expense"
          onChange={() => setIsExpense((oldState) => !oldState)}
          checked={isExpense}
        />
      </Segment>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
}
export default NewEntryForm;
