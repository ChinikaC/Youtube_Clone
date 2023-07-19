import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`) // this gives the video detail data
    .then((data) => setVideoDetail(data.items[0])); // 0 means only the first video

  }, [id]);
  // this immediately fetches the data as soon as the component loads

  if(!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, 
  statistics: { viewCount, likeCount} } = videoDetail; // object destructuring 

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography>
                  {channelTitle}
                </Typography>
              </Link>

            </Stack>

          </Box>

        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail;