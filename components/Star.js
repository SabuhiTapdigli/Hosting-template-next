import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box';

const Star = () => {
    const value = 5;

  return (
        <div>
            <Box component="fieldset" mb={0} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
            </Box>
        </div>
  )

        }

export default Star