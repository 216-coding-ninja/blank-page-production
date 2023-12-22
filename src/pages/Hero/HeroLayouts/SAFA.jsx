import { Colors } from "@/common/constants";
import { 
    styled,
    Box,
    Typography,
    Divider
} from "@mui/material";
import BlockPattern from "../components/BlockPattern";

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
    width: '640px',
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
    marginBottom: theme.spacing(3)
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
            <EventName>Football</EventName>
            <EventName>SaFa - 14 Dec 2023</EventName>
            <SAFATitle variant="h5">
                BROOS ANNOUNCES PRELIMARY BAFANA SQUAD FOR AFCON
            </SAFATitle>
            <HeroDivider />
            <SAFADetailInfo>
                14 December 2023 – Bafana Bafana 
                coach Hugo Broos showed his hand when he announced 
                his preliminary squad for next year’s Africa Cup of Nations in Côte d’Ivoire on Thursday.
            </SAFADetailInfo>
            <BlockPattern />
        </SAFAContainer>
    )
}

export default SAFA;