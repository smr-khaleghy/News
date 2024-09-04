const SearchInput = ({ value, onChange }) => (
    <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="searchBbar w-full sm:w-4/12 px-3 rounded-s-md border-b sm:border-b-0 min-h-10"
    />
);
export default SearchInput;