import React, {useEffect, useState} from 'react';
import SearchInput from './SearchInput';
import CategorySelect from './CategorySelect';
import SourceSelect from './SourceSelect';
import CustomDatePicker from './CustomDatePicker';
import {useDispatch, useSelector} from "react-redux";
import {setQuery, setCategory, setSource, setDate} from "../state/filters/filters.slice";
import "react-datepicker/dist/react-datepicker.css";
import {categories} from "../utils/categories"
import {sources} from "../utils/sources"

const SearchBar = ({onSearch}) => {
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()

    const handleSearchClick = (e) => {
        e.preventDefault();
        console.log(filters); 
        onSearch();
    };

    const saveSearch = async (e) => {
        e.preventDefault();
        await localStorage.setItem('filters', JSON.stringify(filters));
        alert('Filters saved successfully.');
    };

    return (
        <div className="w-full pt-4 flex justify-center">
            <form className="w-full lg:w-2/3 xl:w-1/2 border border-gray-100 flex rounded-md flex-col sm:flex-row">

                <SearchInput
                    value={filters.query}
                    onChange={(e) => dispatch(setQuery(e.target.value))}
                />
                <CategorySelect
                    options={categories}
                    selected={filters.category}
                    onChange={(option) => dispatch(setCategory(option?.value))}
                />
                <SourceSelect
                    options={sources}
                    selected={filters.source}
                    onChange={(option) => dispatch(setSource(option?.value))}
                />
                <CustomDatePicker
                    selected={filters.fromDate}
                    onChange={(date) => dispatch(setDate(date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + (date.getDate()).toString().padStart(2, '0')))}
                />

                <button className="min-h-10 px-3 text-gray-600 w-full sm:w-1/12 border-l flex justify-center items-center bg-gray-50"
                    onClick={handleSearchClick}>
                    Search
                </button>

                <button className="min-h-10 px-3 text-gray-600 w-full sm:w-1/12 border-l flex justify-center items-center bg-gray-50"
                    onClick={saveSearch}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
