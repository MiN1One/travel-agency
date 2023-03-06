import dayjs from "dayjs";
import { memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VscCalendar } from 'react-icons/vsc';

interface DateInputProps {
  date: string;
  onChange(date: Date): void;
}

function DateInput({ date, onChange }: DateInputProps) {
  return (
    <DatePicker
      customInput={(
        <label tabIndex={0} className="input-light">
          {dayjs(date).format('DD/MM/YYYY')}
          <VscCalendar />
        </label>
      )}
      onChange={onChange}
      value={date}
    />
  );
}

export default memo(DateInput);
