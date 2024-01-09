import{
    styled,
    Box,
    Typography
}from '@mui/material';

import { 
    Colors
} from '@/common/constants';

const BlankPageBtnBox = styled('button')(({ theme }) => ({
    padding: theme.spacing(2, 2),
    color: Colors.White,
    backgroundColor: Colors.Orange,
    width: '140px',
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none'
}))

function BlankPageBtn({ btnText, onClick }){

    return(
        <BlankPageBtnBox onClick={onClick}>
            <Typography>
                {btnText}   
            </Typography>
        </BlankPageBtnBox>
    )
}

export default BlankPageBtn;