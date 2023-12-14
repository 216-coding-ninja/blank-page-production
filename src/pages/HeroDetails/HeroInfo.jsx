import BlankPageBtn from '@/common/components/BlankPageBtn';
import { Colors } from '@/common/constants';
import{
    styled,
    Box,
    Container,
    Typography,
    Divider
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

import { Fragment } from 'react';

const HeroInfoContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', /* Center content vertically */
    minHeight: '80vh', /* Set minimum height of the container to viewport height */
    position: 'relative',
}))

const HeroUpperContent = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const HeroInfoTypography = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}))

const GenreText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.Orange,
}))

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    color: Colors.White,
    paddingBottom: theme.spacing(2)
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
    color: Colors.White
}))

const BroadcastingText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    color: Colors.Grey,
    paddingBlock: theme.spacing(2),
    width: '200px'
}))

const MembersText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    color: Colors.Grey,
    paddingBlock: theme.spacing(2),
    width: '240px'
}))

const BlocksImg = styled('img')({
    
})

const BroadcastingSocials = styled('img')({
    cursor: 'pointer'
})

const BroadcastingSocialContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3)
}))

const ScrollIndicator = styled('img')(({ theme }) => ({
    width: '30px'
}))

const ScrollIndicatorBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(-12)
}))



function HeroInfo(){
    return(
        <Fragment>
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
                        <BroadcastingSocialContainer>
                            <BroadcastingSocials 
                                src={Spotify}
                                alt='spotify'
                            />
                            <BroadcastingSocials 
                                src={Deezer}
                                alt='deezzer'
                            />
                        
                        </BroadcastingSocialContainer>
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
            
        </Fragment>
    )
}

export default HeroInfo;