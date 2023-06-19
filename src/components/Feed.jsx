import { useState, useEffect} from 'react'
import { Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
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
    <Sidebar></Sidebar>

    <Typography className="copyright"
    variant="body2" sx={{mt: 1.5, color: '#fff'}}>
      Copyright 2023 CC Media
    </Typography>

    </Box>

    </Stack>
  )
}

export default Feed