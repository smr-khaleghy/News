// customStyles.js
export const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: '100%',
      borderWidth: '0px',
      borderLeft: '1px solid rgb(243 244 246)',
      borderRadius: '0px',
      fontSize: '14px',
      boxShadow: state.isFocused ? 'none' : null,
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'rgb(243 244 246)',
      },
    }),
    input: (provided) => ({
      ...provided,
      border: '0px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '2px',
    }),
  };
  