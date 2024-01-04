import { 
    useState 
} from "react";

import { 
    styled,
    Box,
    Typography,
    Divider,
    Modal
} from "@mui/material";



import BlockPattern from "../components/BlockPattern";
import BlankPageBtn from "@/common/components/BlankPageBtn";
import { Colors } from "@/common/constants";


const SAFAContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(800)]: {
        alignItems: 'center'
    }
}))

const EventName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.OpacWhite,
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.down(900)]:{
        textAlign: 'center'
    }
}));

const SAFATitle = styled(Typography)(({ theme }) => ({
    fontSize: '38px',
    color: Colors.White,
    fontWeight: '600',
    textTransform: 'uppercase',
    width: '790px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down(1145)]: {
        fontSize: '30px',
        maxWidth: '800px'
    },
    [theme.breakpoints.down(1096)]: {
        maxWidth: '600px'
    },
    [theme.breakpoints.down(900)]:{
        textAlign: 'center'
    }
}))

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '100%',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(2)
}));

const SAFADetailInfo = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    maxWidth: '660px',
    [theme.breakpoints.down(900)]:{
        textAlign: 'center'
    }
}))
function SAFA(){
   

    return (
        <SAFAContainer>
            <SAFATitle variant="h5">
                Banyana Banyana qualify for 2024 Women's Africa Cup of Nations 
            </SAFATitle>
            <HeroDivider />
            <SAFADetailInfo>
                Desiree Ellis guided her Banyana Banyana side to yet another Women's Africa Cup of Nations tournament and Janine Van Wyk made history.
            </SAFADetailInfo>
            <BlockPattern />
            
        </SAFAContainer>
    )
}

export default SAFA;