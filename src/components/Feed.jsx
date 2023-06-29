import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=
    ${selectedCategory}`);
  }, [selectedCategory]);
  {/* q = query */ }

  return (
    <Stack sx={{ flexDirection: { sx:
    "coloumn", md: "row"} }}>

      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}>
        </Sidebar>

        <Typography className="copyright"
          variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 CC Media
        </Typography>

      </Box>

      <Box p={2} sx={{ overFlowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos />

      </Box>
    </Stack>
  )
}

export default Feed