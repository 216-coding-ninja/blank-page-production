import { 
    Colors 
} from '@/common/constants';

import{
    Box,
    Divider,
    Typography,
    styled
} from '@mui/material';

import BlockPattern from '@/pages/Hero/components/BlockPattern';


const WelcomeTitle = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    color: Colors.White,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(1220)] : {
        fontSize: '36px'
    },
    [theme.breakpoints.down(1000)]: {
        maxWidth: '680px'
    }
}))

const WelcomeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '990px',
})

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '100%',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3),
    // [theme.breakpoints.down(1220)] : {
    //     width: '800px'
    // },
    // [theme.breakpoints.down(1000)]: {
    //     width: '680px'
    // },
    // [theme.breakpoints.down(900)] : {
    //     width: '500px'
    // }
}))

const HeroDetailInfo = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    [theme.breakpoints.down(900)]:{
        maxWidth: '500px'
    }
}))

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
            <BlockPattern />
        </WelcomeContainer>
    )

}

export default HeroWelcome;