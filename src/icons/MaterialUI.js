import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ShowerIcon from '@mui/icons-material/Shower';
import AbcIcon from '@mui/icons-material/Abc';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const MaterialUI = () => {
  return (
    <Box>
        <Stack direction={'row'}>
            <Box sx={{p: 1}}>
                <HomeIcon sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                <ShowerIcon sx={{fontSize: 'large'}}/>
            </Box>

            <Box sx={{p: 1}}>
                <AbcIcon sx={{fontSize: 'large'}}/>
            </Box>

            <Box sx={{p: 1}}>
                <AgricultureIcon sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                < AccountBalanceIcon sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                < AddCircleIcon  sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                <  AddReactionIcon  sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                <  AddModeratorIcon   sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                <  AddBusinessIcon   sx={{fontSize: 'large'}}/>
            </Box>
        </Stack>
    </Box>
  )
}

export default MaterialUI