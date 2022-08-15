import { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {CATEGORIES, COUNTRIES, SORT_BY} from '../utils/metadata';
import moment from "moment";

// Side Nav component for the app
// Contains custom various filers to narrow down the search
const SideNav = () => {

    const [showCategory, setShowCategory] = useState(false);
    const [showCountries, setShowCountries] = useState(false);
    const [showSortBy, setShowSortBy] = useState(false);
    const [showDate, setShowDate] = useState(false);

    const [categories, setCategories] = useState(CATEGORIES);
    const [countries, setCountries] = useState(COUNTRIES);
    const [sortBy, setSortBy] = useState(SORT_BY);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const [fromDateError, setFromDateError] = useState('');
    const [toDateError, setToDateError] = useState('');

    const router = useRouter();

    // Helper function to hande change in news category
    const handleCategoryChange = (e) => {
        const _categories = categories.map(category => {
            if(category.key === e.target.id){
                return {
                    ...category,
                    checked: !category.checked
                }
            }
            return {...category}
        })
        setCategories(_categories);
    }

    // Helper function to hande change in news country
    const handleCountryChange = (e) => {
        const _countries = countries.map(country => {
            if(country.key === e.target.id){
                return {
                    ...country,
                    checked: !country.checked
                }
            }
            return {...country}
        })
        setCountries(_countries);
    }

    // Helper function to hande change in sorting method
    const handleSortByChange = (e) => {
        const _sortBy = sortBy.map(item => {
            if(item.key === e.target.id){
                return {
                    ...item,
                    checked: true
                }
            }
            return {
                ...item,
                checked: false
            }
        })
        setSortBy(_sortBy);
    }

    // Helper function to hande change in date
    const handleDateChange = (e) => {
        if(e.target.id === 'from_date')
            setFromDate(e.target.value);
        else
            setToDate(e.target.value);
    }

    // Helper function to clear all filters
    const handleClearAll = () => {
        setCategories(CATEGORIES);
        setCountries(COUNTRIES);
        setSortBy(SORT_BY);
        setFromDate("");
        setToDate("");
        setToDateError("");
        setFromDateError("");
        router.push('/news');
    }

    // Helper function to apply filters based on selected elements
    const handleSubmit = () => {

        // Current date
        const today = moment(new Date()).format('YYYYMMDD');
        
        // If from date is a future date show error and return
        if(fromDate!==''){ 
            const _fromDate = moment(fromDate).format('YYYYMMDD');

            if(parseInt(_fromDate)>parseInt(today)){
                setFromDateError("Cannot be a future date");
                setToDateError("");
                console.log("From date cannot be a future date");
                return;
            }
        }

        // If to date is a future date show error and return
        if(toDate!==''){
            const _toDate = moment(toDate).format('YYYYMMDD');
        
            if(parseInt(_toDate)>parseInt(today)){
                setToDateError("Cannot be a future date");
                setFromDateError("");
                console.log("To date cannot be a future date");
                return;
            }
        }

        // If to date is selected and from date in not selected show error and return
        if(toDate!==''){
            if(fromDate===''){
                setToDateError("");
                setFromDateError("Select from date");
                console.log("From date needs to be selected");
                return;
            }
        }

        const _categories = categories.filter(category => category.checked).map(category => category.key);
        const _countries = countries.filter(country => country.checked).map(country => country.key);
        const _sortBy = sortBy.filter(item => item.checked)[0].key;

        let url = '/news?';

        if(_categories.length){
            url = url + '&categories=' + _categories.join(",");
        }

        if(_countries.length){
            url = url + '&countries=' + _countries.join(",");
        }
        url = url + '&sortBy=' + _sortBy;

        if(fromDate !== ''){
            url = url + '&fromDate=' + fromDate;
        }

        if(toDate !== ''){
            url = url + '&toDate=' + toDate;
        }

        setToDateError("");
        setFromDateError("");

        router.push(url);
    }

    return(
        <div className="col-sm-12 col-md-12 col-lg-3  left-filter-col">
            <div className="left-filter-container px-4">
                <div className="left-filter-heading mt-3">
                    <h4>Filters</h4>
                    <small className="text-warning left-filter-clear-all" onClick={handleClearAll}>CLEAR ALL</small>
                </div>

                <h5 className="mt-3 filter-dropdown-heading" onClick={() => setShowCategory(!showCategory)}>Categories</h5>
                {showCategory && <>
                    {categories.map(category => (
                        <Form.Check 
                            key={category.key}
                            type='checkbox'
                            id={category.key}
                            label={category.value}
                            checked={category.checked}
                            onChange={handleCategoryChange}
                        />
                    ))}
                </>
                }

                <hr className="filter-dropdown-divider"/>

                <h5 className="mt-3 filter-dropdown-heading" onClick={() => setShowCountries(!showCountries)}>Countries</h5>
                {showCountries && <>
                    {countries.map(country => (
                        <Form.Check 
                            key={country.key}
                            type='checkbox'
                            id={country.key}
                            label={country.value}
                            checked={country.checked}
                            onChange={handleCountryChange}
                        />
                )   )}
                </>
                }
                
                <hr className="filter-dropdown-divider"/>

                <h5 className="mt-3 filter-dropdown-heading" onClick={() => setShowSortBy(!showSortBy)}>Sort By</h5>
                {showSortBy && <>
                    {sortBy.map(item => (
                        <Form.Check 
                            key={item.key}
                            type='radio'
                            id={item.key}
                            label={item.value}
                            name='filter-sort-by'
                            value={item.key}
                            checked={item.checked}
                            onChange={handleSortByChange}
                        />
                    ))}
                </>
                }

                <hr className="filter-dropdown-divider"/>

                <h5 className="mt-3 filter-dropdown-heading" onClick={() => setShowDate(!showDate)}>Date</h5>
                {showDate && <>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>From</Form.Label>
                            <Form.Control 
                                type="date" 
                                id='from_date'
                                value={fromDate}
                                onChange={handleDateChange} />
                            {fromDateError!=='' ? <small className='text-danger'>{fromDateError}</small> : null}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>To</Form.Label>
                            <Form.Control 
                                type="date" 
                                id='to_date'
                                value={toDate}
                                onChange={handleDateChange} />
                            {toDateError!=='' ? <small className='text-danger'>{toDateError}</small> : null}
                        </Form.Group>
                    </Form>
                </>
                }

                <hr className="filter-dropdown-divider"/>

                <Button className="mb-3 left-filter-btn" variant="warning" onClick={handleSubmit}>Apply Filters</Button>
            </div>
        </div>
    );
}

export default SideNav;