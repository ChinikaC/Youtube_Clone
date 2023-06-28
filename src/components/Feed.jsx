import { useState, useEffect} from 'react'
import { Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=
    ${selectedCategory}`); // q= query
  }, [selectedCategory]); 

  return (
    <Stack sx={{ 
      flexDirection: { sx: 
      "coloumn", md: "row"}}}>
    {/* sx means usually, so usually the content on the page
    will be in a form of a column (on a mobile device) but on medium sized devices 
    and larger (laptops, desktops or tablets), it will be in the form of a row
     */}
    <Box sx={{ height: { sx: 'auto', md: '92vh'}, 
    borderRight: '1px solid #3d3d3d', 
  px: { sx: 0, md: 2}}}>
    <Sidebar
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}>
    </Sidebar>

    <Typography className="copyright"
    variant="body2" sx={{mt: 1.5, color: '#fff'}}>
      Copyright 2023 CC Media
    </Typography>

    </Box>

    <Box p={2} sx={{ overFlowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white'}}>
        New <span style={{ color: '#F31503'}}>videos</span>
      </Typography>

      <Videos />
      
    </Box>
    </Stack>
  )
}

export default Feed