import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  return (
    <Paper 
        component="form"
        onSubmit={() => {}}
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
            value=""
            onChange={() => {}}
            />
            <IconButton type="submit" 
            sx={{ p:'10px', color: 'red'}}>
              <Search />
            </IconButton>
    </Paper>
  )
}

export default SearchBar;