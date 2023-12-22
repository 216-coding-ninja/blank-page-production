import { Colors } from "@/common/constants";
import { 
    styled,
    Box,
    Typography,
    Divider
} from "@mui/material";

const WorldCupContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(6)
}))

const EventName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.OpacWhite,
    paddingBottom: theme.spacing(1.5),
    display: 'flex'
}));

const WorldCupTitle = styled(Typography)({
    fontSize: '38px',
    color: Colors.White,
    fontWeight: '600',
    width: '928px',
    textTransform: 'uppercase'
})

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '851px',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3)
}));

const WorldCupDetailInfo = styled(Typography)({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    maxWidth: '851px'
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
        </WorldCupContainer>
    )
}

export default WorldCup;