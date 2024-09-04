import Select from 'react-select';
import { customStyles } from './ReactSelectStyle'

const SourceSelect = ({ options, selected, onChange }) => {

    return (
        <Select
            className="border-b sm:border-b-0 w-full sm:w-2/12 min-h-10"
            options={options}
            placeholder="source"
            styles={customStyles}
            onChange={onChange}
            defaultValue={selected}
        />
    )
};

export default SourceSelect;
