

import {
    Box,
    Divider,
    Typography,
    styled
} from '@mui/material'

import { 
    Colors 
} from '@/common/constants';

import 
    BlankPageLogo 
from '@/assets/icons/BlankPageLogo.png';

import
    Instagram
from '@/assets/icons/instagram.png';

import 
    Telephone
from '@/assets/icons/phone.png';

import
    EmailAddress
from '@/assets/icons/email.png';

import { BlankPageLogoImg } from '@/common/components/NavigationBar';
import { Email } from '@mui/icons-material';

const Banner = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.Orange,
    padding: theme.spacing(0.6)
}))


const ContactContainer = styled(Box)(({ theme }) => ({
    
}))

const ContactContent = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.DarkGrey,
    padding: theme.spacing(3, 4),
    display: 'flex',
    justifyContent: 'center',
   
}))

const ContactDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: Colors.White,
    transform: 'rotate(180deg)',
    borderWidth: '1px',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(4)
}))


const Socials = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1)
}))

const SocialCircle = styled('img')({
    // border: `1px solid ${Colors.White}`,
    // borderRadius: '50%',
    padding: '9px',
    objectFit: 'contain'
})

const SocialList = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1)
}))

const SocialContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    paddingBlock: theme.spacing(0.4)
}));

const SocialText = styled(Typography)({
    color: Colors.White,
    fontSize: '12px'
})

const LinkSocial = styled('a')({
    marginTop: '5px'
})

function ContactUs(){
    return(
        <ContactContainer>
            <Banner></Banner>
            <ContactContent>
                <Socials>
                    <BlankPageLogoImg 
                        src={BlankPageLogo}
                        alt='blank-page'
                    />
                </Socials>

                <ContactDivider />

                <SocialList>
                    <SocialContainer>

                        <LinkSocial
                            href='https://www.instagram.com/blankpage_productions/'
                            target='_blank'
                        >
                            <SocialCircle 
                                src={Instagram}
                            />    
                        </LinkSocial>
                        
                        <SocialText>blankpage_productions</SocialText>
                    </SocialContainer>
                    
                    <SocialContainer>
                        

                        <SocialCircle 
                            src={EmailAddress}
                        />
                        
                        <SocialText>info@blankpageproduction.co.za</SocialText>
                    </SocialContainer>

                </SocialList>
                
            </ContactContent>
        </ContactContainer>
    )
}

export default ContactUs;