import 
    BlankPageBtn 
from '@/common/components/BlankPageBtn';


import { 
    Colors 
} from '@/common/constants';

import{
    styled,
    Box,
    Container,
    Typography,
    Divider,
    Grid
}from '@mui/material';

import
    Block
from '@/assets/icons/block.png'

import
    Deezer
from '@/assets/icons/deezer.png'

import
    Spotify
from '@/assets/icons/spotify.png'

import
    Scroll
from '@/assets/icons/scroll.png'

import 
    HeroEvent 
from './HeroEvent';

import
    Youtube
from '@/assets/icons/youtube.svg'

const HeroInfoContainer = styled(Container)(({ theme }) => ({

}))

const HeroAllContent = styled(Box)({

})

const HeroUpperContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        display: 'flex',
        flexDirection: 'column'
    }
}))

const HeroInfoTypography = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]:{
        textAlign: 'center',
        alignItems: 'center'
    }
}))

const GenreText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.Orange,
}))

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    color: Colors.White,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]:{
        textAlign: 'center',
        fontSize: '36px'
    }
}))

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '520px',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3)
}))

const Description = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontStyle: 'italic',
    width: '640px',
    color: Colors.White,
    [theme.breakpoints.down("md")]: {
        fontSize: '17px',
        width: '100%'
    }
}))

const BroadcastingText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    color: Colors.OpacWhite,
    paddingBlock: theme.spacing(2),
    width: '200px'
}))

const MembersText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    color: Colors.OpacWhite,
    paddingBlock: theme.spacing(2),
    width: '240px'
}))

const BlocksImg = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const BroadcastingSocials = styled('img')({
    cursor: 'pointer',
    width: '30px',
    objectFit: 'contain'
})

const BroadcastingSocialContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3)
}))

const ScrollIndicator = styled('img')(({ theme }) => ({
    width: '30px',
    [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2),
        width: '20px'
    }
}))

const ScrollIndicatorBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(-12),
    [theme.breakpoints.down('md')]: {
        marginTop: 'unset',
    }
}))

const EventDivider = styled(Divider)(({ theme }) => ({
    width: '91%',
    borderColor: Colors.Grey,
    borderWidth: '1px',
    zIndex: 111,
    margin: theme.spacing(3, 4)
}))
const EventsContainer = styled(Container)(({ theme }) => ({
   

}))


function HeroInfo({}){
    return(
        <HeroAllContent>
            <HeroInfoContainer>
                <HeroUpperContent>
                    <HeroInfoTypography>
                        <GenreText>
                            GENRE OF EVENT
                        </GenreText>
                        <Title 
                            fontWeight={'700'}
                        >
                            SPORT/23
                        </Title>
                        <HeroDivider />
                        <Description>
                            South Africans went to sleep last 
                            Sunday night, if their adrenaline allowed any sleep,
                            in an ecstatic mood. It had been a fraught week with a good ending.
                            That mood may have been carried into Monday and Tuesday, then came the realisation - this weekend is going to be
                        </Description>
                        <BroadcastingText>
                            Broadcasting in:
                            DSTV,Hulu,CatchUp..
                        </BroadcastingText>

                        <MembersText>
                            Members:
                            Tyler Joseph,Josh Dun, Nick Thomas,Chris Salih
                        </MembersText>

                        <BlankPageBtn 
                            btnText={'See More'}
                        />
                        
                    </HeroInfoTypography>
                    <BlocksImg src={Block} alt='blocks illustration'/>
                </HeroUpperContent>

                <ScrollIndicatorBox>
                    <ScrollIndicator 
                        src={Scroll} 
                        alt='scroll-indicator'
                    />
                </ScrollIndicatorBox>
            </HeroInfoContainer>
            
            <EventDivider />

        </HeroAllContent>
    )
}

export default HeroInfo;