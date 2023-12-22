import { Colors } from "@/common/constants";
import { 
    styled,
    Box,
    Typography,
    Divider
} from "@mui/material";

const SAFAContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column'
})

const EventName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.OpacWhite,
    paddingBottom: theme.spacing(1.5)
}));

const SAFATitle = styled(Typography)({
    fontSize: '38px',
    color: Colors.White,
    fontWeight: '600',
    width: '540px'
})

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '520px',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3)
}));

const SAFADetailInfo = styled(Typography)({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    maxWidth: '460px'
})

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
        </SAFAContainer>
    )
}

export default SAFA;