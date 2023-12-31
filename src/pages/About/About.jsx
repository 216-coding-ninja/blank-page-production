import{
    styled,
    Container,
    Box,
    Typography,
    Divider
}from '@mui/material';

import { 
    Colors 
} from '@/common/constants';


import 
    SoccerField
from '@/assets/images/soccer-field.png';

import 
    Block 
from '@/assets/icons/block.png';

import 
    Scroll 
from '@/assets/icons/scroll.png'
import Contact from './components/Contact';
import { typography } from '@/common/theme/typography';

const AboutContainer = styled(Box)({
    backgroundImage: `url(${SoccerField})`,
    backgroundPosition: 'right  center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'max-content'
})

const AboutContent = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}))

const AboutTitle = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    color: Colors.White,
    fontWeight: '600',
    position: 'relative'
}))

const AboutDivider = styled(Divider)(({ theme }) => ({
    borderWidth: '1px',
    borderColor: Colors.White,
    width: '600px',
    marginBlock: theme.spacing(3)
}));

const AboutDescription = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: '15px',
    fontWeight: '200',
    maxWidth: '900px',
    textAlign: 'center',
    paddingBottom: theme.spacing(6)
}));

const BlockPattern = styled('img')({
    position: 'absolute',
    transform: 'rotate(90deg)',
    width: '30px',
    top: 40,
    right: 130
})

const ScrollPattern = styled('img')({
    position: 'absolute',
    width: '30px',
    left: 160,
    bottom: 40,
    zIndex: 1
})

const SpanText = styled('span')({
    fontWeight: '900'
})


function About(){
    return(
        <AboutContainer>
            <AboutContent>
                <AboutTitle>ABOUT US</AboutTitle>
                <BlockPattern src={Block} alt='block-pattern'/>
                <AboutDivider />
                <AboutDescription>
                    In the <SpanText>dynamic world of media production</SpanText>, 
                    there are those who craft narratives that transcend 
                    the boundaries of traditional storytelling. Blank Page 
                    Productions (BPP) is one such creative entity, a team of visionaries who have 
                    embarked on a mission to <SpanText>tell sports stories like no other</SpanText>. With a collective background
                    deeply rooted in the realm of sports, the founders of BPP bring a unique perspective that 
                    goes beyond the victories and trophies, delving into the intricate lives of athletes, their families, 
                    sacrifices, and the relentless pursuit of dreams. Every narrative 
                    conceived by BPP begins on a ‘blank page,’ an empty canvas where stories of grit, guts, and transcendence come to life.
                </AboutDescription>
                <ScrollPattern src={Scroll} alt='scroll-pattern'/>
            
                <Contact />
            </AboutContent>

        </AboutContainer>
    );
}

export default About;