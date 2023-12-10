import React from 'react';

interface AccountDataInputProps {
  label: string;
  id: string;
  initialValue: string;
  onValueChange: (name: string) => void;
  className: string
}

const AccountDataInput: React.FC<AccountDataInputProps> = (props: AccountDataInputProps) => {
  return (
    <div className={'input-container ' + props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        value={props.initialValue}
        onChange={(e) => props.onValueChange(e.target.value)}
      />
    </div>
  );
};

export default AccountDataInput;
