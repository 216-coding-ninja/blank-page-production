import { 
    Colors 
} from "@/common/constants";

import { 
    styled,
    Box,
    Typography,
    Divider
} from "@mui/material";

import 
    BlockPattern 
from "@/pages/Hero/components/BlockPattern";

const WorldCupContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2)
}))

const EventName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.OpacWhite,
    paddingBottom: theme.spacing(1.5),
    display: 'flex',
    [theme.breakpoints.down(900)] : {
        textAlign: 'center',
        justifyContent: 'center'
    }
}));

const WorldCupTitle = styled(Typography)(({ theme }) => ({
    fontSize: '38px',
    color: Colors.White,
    fontWeight: '600',
    maxWidth: '928px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down(1145)]: {
        fontSize: '30px',
        maxWidth: '800px'
    },
    [theme.breakpoints.down(1096)]: {
        maxWidth: '600px'
    },
    [theme.breakpoints.down(900)] : {
        textAlign: 'center'
    }
}))

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '100%',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3),
}));

const WorldCupDetailInfo = styled(Typography)({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    maxWidth: '851px',
    [theme.breakpoints.down(900)]:{
        textAlign: 'center'
    }
})

const UnderlineText = styled(Typography)(({ theme }) => ({
    textDecorationLine: 'underline',
    paddingInline: theme.spacing(.5)
}))


function WorldCup(){
    return (
        <WorldCupContainer>
            <EventName>Football</EventName>
            <EventName>By <UnderlineText>Yanga Sibembe</UnderlineText> - 16 Nov 2023</EventName>
            <WorldCupTitle variant="h5">
                Bafana Bafana seek perfect start to World Cup qualification campaign
            </WorldCupTitle>
            <HeroDivider />
            <WorldCupDetailInfo>
                Bafana Bafana have become a team that qualifies for major tournaments sporadically. 
                They need positive results against Benin and Rwanda as they kick off a bid to play in the 
                Fifa World Cup for the first time since 2010.
            </WorldCupDetailInfo>
            <BlockPattern />
        </WorldCupContainer>
    )
}

export default WorldCup;