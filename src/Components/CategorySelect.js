import Select from 'react-select';
import { customStyles } from './ReactSelectStyle'

const CategorySelect = ({ options, selected, onChange }) => (
    <Select
        className="border-b sm:border-b-0 w-full sm:w-2/12 min-h-10"
        options={options}
        styles={customStyles}
        placeholder="category"
        onChange={onChange}
        defaultValue={selected}
    />
);

export default CategorySelect;
