import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // have to say the above in React applications because when we submit
    // a form, it usually reloads the page, in reactjs we don't want it to do that
    // so as it is the default behaviour of the browser, we need to write e.preventDefault()
  
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: 'px solid #e3e3e3',
            pl: 2, //'pl' stands for padding left
            boxShadow: 'none',
            mr: {sm: 5} //'mr' stands for margin right and ‘sm’ stands for small devices – means the margin right is 5 only on small devices
        }}
        >
            <input 
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" 
            sx={{ p:'10px', color: 'red'}}>
              <Search />
            </IconButton>
    </Paper>
  )
}

export default SearchBar;