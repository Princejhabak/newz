import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

// Custom search component for the app's header/navbar
const SearchBox = () => {

  const [keyword, setKeyword] = useState('');

  const router = useRouter();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     router.push(`/news?search=${keyword}`);
//   }

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/news?search=${keyword}`);
  }

  return (
    <Form inline data-testid="nav-search-form">
    {/* <Form onSubmit={submitHandler} inline data-testid="nav-search-form"></Form> */}
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Articles...'
        className='mr-sm-2 ml-sm-5'
      />
      <SearchButton disabled={false} onClick={handleClick}>
        Search
      </SearchButton>
    </Form>
  )
}

export default SearchBox;

export const SearchButton = ({disabled, onClick, children}) => {
    return(
        <Button 
            type='submit' 
            variant='outline-warning' 
            className='navbar-search-btn'
            disabled={disabled}
            onClick={onClick}
            data-testid="nav-search-button"
        >
            {children}
        </Button>
    )
}