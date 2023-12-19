import { useState, ChangeEvent, FormEvent } from 'react';
import { AddToFolder, SocialShare } from '@/src/components';
import * as Style from './Modal.style';

interface ModalFormProps {
  subTitle: string;
  option: Option;
}

export default function ModalForm({ subTitle, option }: ModalFormProps) {
  const { input, button, trigger } = option;
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    setValue(InputValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if(input){}
  };

  return (
    <Style.Form onSubmit={handleSubmit}>
      {input ? (
        <Style.Input
          placeholder={subTitle}
          value={value}
          onChange={handleInputChange}
        />
      ) : (
        <span>{subTitle}</span>
      )}
      {trigger === 'AddToFolder' && <AddToFolder />}
      {trigger === 'SocialShare' && <SocialShare />}
      {button && (
        <Style.Button color={button.color}>{button.title}</Style.Button>
      )}
    </Style.Form>
  );
}
