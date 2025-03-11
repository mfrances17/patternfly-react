import { useRef, useState } from 'react';
import { DatePicker, DatePickerRef } from '@patternfly/react-core';

export const DatePickerDemo = () => {
  const [value, setValue] = useState('2020-03-18');
  const controlledDateRef = useRef<DatePickerRef>(null);

  const rangeValidator = (date: Date) => {
    if (date < new Date('2020-03-17')) {
      return 'error';
    }
    return '';
  };

  return (
    <>
      <div id="date-picker-clear">
        <DatePicker value={value} />
        <div>
          <button onClick={() => setValue('')}>Clear date</button>
        </div>
      </div>
      <div id="date-picker-validator">
        <DatePicker value={value} onChange={(_event, value) => setValue(value)} validators={[rangeValidator]} />
        <div>
          <button onClick={() => setValue('2020-03-18')}>Set date</button>
        </div>
      </div>
      <div id="date-picker-controlled">
        <DatePicker ref={controlledDateRef} value={value} />
        <div>
          <button
            onClick={() => {
              if (controlledDateRef.current) {
                controlledDateRef.current.toggleCalendar();
              }
            }}
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
};
