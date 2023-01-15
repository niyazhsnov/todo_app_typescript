import React from 'react';
import { TItem } from '../Item';
import './AddItem.css';

type AddItemProps = {
  handleAddItem: (item: TItem) => void;
};

export default function AddItem({ handleAddItem }: AddItemProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      item: { value: string };
      reset: () => void;
    };
    handleAddItem({ message: target.item.value, checked: false });
    target.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      
      <input
        type='text'
        name='item'
        placeholder='What needs to be done?'
        className='form__input'
      />
    </form>
  );
}
