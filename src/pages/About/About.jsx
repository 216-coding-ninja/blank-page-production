import{
    styled,
    Container,
    Box,
    Typography
}from '@mui/material';

import 
    AboutImage
from '@/assets/images/about_img.png';

import { 
    Colors 
} from '@/common/constants';

import
    AboutMissionText
from '@/assets/images/about_mission.png';

const AboutContainer = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.DarkGrey
}))

const AboutContent = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')] : {
        flexDirection: 'column'
    }
}))

const AboutContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '54%',
    paddingBlock: theme.spacing(6),
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down('md')]:{
        marginLeft: 'unset'
    }
}))

const AboutImg = styled('img')(({ theme }) => ({
    marginTop: theme.spacing(-10),
    zIndex: 1,
    width: '400px',
    [theme.breakpoints.down('md')] : {
        marginTop: theme.spacing(-2)
    }
}));

const AboutMission = styled('img')(({ theme }) => ({
    zIndex: 200,
    width: '200px',
    objectFit: 'contain',
}))

const AboutTitle = styled(Typography)(({ theme }) => ({
    fontSize: '17px',
    color: Colors.White,
    fontWeight: '600',
    letterSpacing: 1,
    alignSelf: 'flex-end',
    paddingBottom: theme.spacing(3),
    position: 'relative',

    '&::after':{
        content: '""',
        position: 'absolute',
        display: 'inline',
        height: '25px',
        width: '5px',
        backgroundColor: Colors.Orange
    },
    [theme.breakpoints.down('md')]:{
        alignSelf: 'center'
    }
}));

const IntroductionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '19px',
    color: Colors.White,
    fontWeight: '600',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]:{
        textAlign: 'center'
    }
}))

const AboutTitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex'
}))

const AboutDescription = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    maxWidth: '590px',
    color: Colors.White,
    [theme.breakpoints.down('md')]:{
        maxWidth: '670px',
        textAlign: 'center'
    }
}))

function About(){
    return(
        <AboutContainer>
            <AboutContent>
                <AboutImg 
                    alt='about-img'
                    src={AboutImage}
                />
                <AboutContainerDetails>
                    <AboutTitle>
                        WHO ARE WE
                    </AboutTitle>
                    <IntroductionTitle>
                        Introduction
                    </IntroductionTitle>
                    <AboutDescription>
                        In the dynamic world of media production, there are those who craft
                        narratives that transcend the boundaries of traditional storytelling.
                        Blank Page Production (BPP) is one such creative entity, a team of visionaries
                        who have embarked on a mission to tell sports stories like no other. With
                        a collective background deeply rooted in the realm of sports, the founders of (BPP) brings a
                        unique perspective that goes beyond the victories and trophies, delving into the intricate lives of
                        athletes, their families, sacrifices, and the relentless pursuit of dreams. Every 
                        narrative conceived by BPP begins on a 'blank page', an empty
                        canvas where stories of grit, guts, and transcendence come to life.
                    </AboutDescription>
                </AboutContainerDetails>
            </AboutContent>
        </AboutContainer>
    );
}

export default About;