import React, { useState } from 'react';
import './Item.css';

export type TItem = {
  message: string;
  checked: boolean;
};

type ItemProps = TItem & {
  toggleCheckItem: () => void;
  removeItem?: () => void;
};

export default function Item({
  message,
  checked,
  toggleCheckItem,
  removeItem,
}: ItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    toggleCheckItem();
  };

  return (
    <div className='item'>
      <label
        className={
          'item__text ' +
          (isChecked ? 'item__text--checked' : 'item__text--unchecked')
        }
      >
        <input
          type='checkbox'
          className='item__check'
          checked={isChecked}
          onChange={handleCheck}
          id='checked'
          
        />
        {message}
      </label>
      {removeItem && (
        <span onClick={removeItem} className='material-icons'>
          X
        </span>
      )}
    </div>
  );
}
