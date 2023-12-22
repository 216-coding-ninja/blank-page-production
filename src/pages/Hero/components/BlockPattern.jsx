
import {
    styled
} from '@mui/material';

import
    Block
from '@/assets/icons/block.png'

const BlocksImg = styled('img')(({ theme }) => ({
    width: '30px',
    alignSelf: 'flex-end',
    transform: 'rotate(90deg)',
    marginBottom: theme.spacing(2)
}))

function BlockPattern(){
    return (
        <BlocksImg 
            src={Block}
            alt='block-pattern'
        />
    )
}

export default BlockPattern;