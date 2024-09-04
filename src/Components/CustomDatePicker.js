import DatePicker from "react-datepicker";

const CustomDatePicker = ({ selected, onChange }) => {

    selected = selected ? new Date(`${selected}T00:00:00`) : new Date()

    return (<div className='border-b min-h-10 sm:border-b-0 w-full sm:w-3/12 flex'>
        <DatePicker
            selected={selected}
            placeholderText="select date"
            className="h-full datePickerCustom border-l"
            onChange={onChange}
            withPortal
        />
    </div>);
}

export default CustomDatePicker;
