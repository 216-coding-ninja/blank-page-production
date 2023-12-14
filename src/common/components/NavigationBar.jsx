import {
    styled,
    Box,
    Typography
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import 
    BlankPageLogo 
from '@/assets/icons/BlankPageLogo.png';

import 
    Telephone
from '@/assets/icons/phone.png';

import
    EmailAddress
from '@/assets/icons/email.png';

import
    FaceBook
from '@/assets/icons/facebook.png';

import
    Instagram
from '@/assets/icons/instagram.png';

import
    YouTube
from '@/assets/icons/youTube.png';

import
    Google
from '@/assets/icons/google.png';

import 
    Menu
from '@/assets/icons/hamburger.png'

import 
    NavigationMenu 
from '@/common/components/Navigation/NavigationMenu';

const NavigationContainer = styled(Box)({
    display: 'flex'
})

const BlankPageLogoBox = styled(Box)(({ theme }) => ({
    width: '100px',
    height: '80px',
    padding: theme.spacing(1, 7),
    backgroundColor: Colors.Orange
}))

const BlankPageContact = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.2, 2),
    backgroundColor: Colors.Black,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        justifyContent: 'flex-end'
    }
}))

const NavigationContent = styled(Box)(({ theme }) => ({
    height: '70px',
    width: '100%'
}))

const BlankPageLogoImg = styled('img')({
    width: '90px'
})

const ContactImg = styled('img')({
    width: '12px'
})

const ContactText = styled(Typography)({
    fontSize: '12px',
    color: Colors.White
})

const ContactInformation = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]:{
        display: 'none',
    }
}))

const ContactInformationBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
}))

const SocialImg = styled('img')({
    width: '100%',
    objectFit: 'contain'
})

const SocialInformation = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
}))

const BlankPageNavigationBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    
}))

const BlankPageNavigation = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 2),
}))

const BlankPageMenuContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2.1, 2),
    backgroundColor: Colors.Orange,
    cursor: 'pointer'
}));

const MenuImg = styled('img')({
    width: '30px'
})

function NavigationBar(){
    return (
        <NavigationContainer>
            <BlankPageLogoBox>
                <BlankPageLogoImg 
                    src={BlankPageLogo}
                    alt='blank-page-logo'
                />
            </BlankPageLogoBox>
            <NavigationContent>
                <BlankPageContact>
                    <ContactInformation>
                        <ContactInformationBox>
                            <ContactImg 
                                src={Telephone} 
                                alt='telephone'
                            />
                            <ContactText>
                                011 534 8409
                            </ContactText>
                        </ContactInformationBox>
                        <ContactInformationBox>
                            <ContactImg 
                                src={EmailAddress} 
                                alt='telephone'
                            />
                            <ContactText>
                                info@blankpageproduction.co.za
                            </ContactText>
                        </ContactInformationBox>
                    </ContactInformation>

                    <SocialInformation>
                        <SocialImg src={FaceBook} alt='facebook'/>
                        <SocialImg src={YouTube} alt='youTube'/>
                        <SocialImg src={Google} alt='google'/>
                        <SocialImg src={Instagram} alt='instagram'/>
                    </SocialInformation>
                </BlankPageContact>
                <BlankPageNavigationBox>
                    <NavigationMenu />

                    <BlankPageMenuContainer>
                        <MenuImg src={Menu} alt='menu'/>
                    </BlankPageMenuContainer>
                </BlankPageNavigationBox>
            </NavigationContent>
        </NavigationContainer>
    )
}

export default NavigationBar;