import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonalPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <TextInput label="bio" multiline source="bio" />
      </SimpleForm>
    </Edit>
  );
};
