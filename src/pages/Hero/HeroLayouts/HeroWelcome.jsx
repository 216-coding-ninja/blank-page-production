import { Colors } from '@/common/constants';
import{
    Box,
    Divider,
    Typography,
    styled
} from '@mui/material'


const WelcomeTitle = styled(Typography)({
    fontSize: '38px',
    color: Colors.White,
    textAlign: 'center',
    fontWeight: '600'
})

const WelcomeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    maxWidth: '580px',
})

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '520px',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3)
}))

const HeroDetailInfo = styled(Typography)({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200'
})

function HeroWelcome(){
    return(
        <WelcomeContainer>
            <WelcomeTitle>
                WE TELL SPORTS STORIES LIKE NO OTHER!
            </WelcomeTitle>
            <HeroDivider />
            <HeroDetailInfo>
                Capturing the heart and soul of sports through the art of storytelling. We refine 
                sports storytelling, going beyond the victories to capture the essence of athletes' lives
            </HeroDetailInfo>
        </WelcomeContainer>
    )

}

export default HeroWelcome;