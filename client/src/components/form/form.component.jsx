import React from 'react';

import {
  GroupContainer,
  FormContainer,
  FormLabel
} from './form.styles';

const Form = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormContainer onChange={handleChange} {...props} />
    {label ? (
      <FormLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormLabel>
    ) : null}
  </GroupContainer>
);

export default Form;