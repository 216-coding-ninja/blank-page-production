import{
    styled,
    Box,
    Typography
}from '@mui/material';

import { 
    Colors
} from '@/common/constants';

const BlankPageBtnBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    color: Colors.White,
    backgroundColor: Colors.Orange,
    width: '170px',
    textAlign: 'center',
    cursor: 'pointer'
}))

function BlankPageBtn({ btnText }){

    return(
        <BlankPageBtnBox>
            <Typography>
                {btnText}   
            </Typography>
        </BlankPageBtnBox>
    )
}

export default BlankPageBtn;