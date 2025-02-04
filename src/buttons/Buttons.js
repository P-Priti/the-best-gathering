import React from 'react'
import { Stack } from '@mui/material'
import SmrutiButton from './smruti-ranjan/SmrutiButton'
import SaiButton from './sai-kiran/SaiButton'
import Custombtn from './gyana-ranjan/Custombtn'
import VButton from './sai-vaishnav/VButton'

const Buttons = () => {
  return (
    <Stack direction={'row'} sx={{ flexWrap: 'wrap', p: 2 }} justifyContent={'center'}>
      <SmrutiButton text={'Smruti Ranjan Badatya'} link={'https://github.com/iamsmruti'} />
      <SaiButton text={'Sai Kiran Mansingh'} link={'https://github.com/skms625'} />
      <Custombtn text='Meditating Panda' link='https://github.com/Meditatingpanda' />
      <VButton text="Sai Vaishnav" link="https://github.com/SaiVaishnav" />
    </Stack>
  )
}

export default Buttons