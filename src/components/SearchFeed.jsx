import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q={searchTerm}`)
    .then((data) => setVideos (data.items))
  }, [searchTerm]);
  {/* q = query */ }

  return (
     <Box p={2} sx={{ overFlowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results for: <span style={{ color: '#F31503' }}>videos {searchTerm}</span> videos
        </Typography>

        <Videos videos={videos}/>

      </Box>
    
  )
}

export default SearchFeed;