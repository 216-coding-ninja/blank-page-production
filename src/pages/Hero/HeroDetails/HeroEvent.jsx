import { Colors } from '@/common/constants';
import{
    styled,
    Box,
    Typography
} from '@mui/material';


const EventBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
}))

const LabelBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0.2, 1),
    backgroundColor: Colors.Purple,
    width: 'max-content'
}))

const LabelText = styled(Typography)(({ theme }) => ({
    fontSize: '11px',
    fontWeight: '600',
    color: Colors.White
}))

const Title = styled(Typography)({
    fontSize: '16px',
    color: Colors.White,
    fontWeight: '600',
    width: '200px'
})

const SettingTitle = styled(Typography)({
    color: Colors.OpacWhite,
    fontSize: '14px',
    width: '240px'
})

function HeroEvent({label, title, setting}){
    return(
        <EventBox>
            <LabelBox>
                <LabelText>
                    {label}
                </LabelText>
            </LabelBox>
            <Title>
                {title}
            </Title>
            <SettingTitle>
                {setting}
            </SettingTitle>
        </EventBox>
    )

}

export default HeroEvent;