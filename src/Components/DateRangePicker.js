import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({ startDate, endDate, onChange }) => (
    <div className='border-b min-h-10 sm:border-b-0 w-full sm:w-3/12 flex'>
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            placeholderText="select date"
            className="h-full datePickerCustom border-l"
            onChange={onChange}
            withPortal
        />
    </div>
);

export default DateRangePicker;
