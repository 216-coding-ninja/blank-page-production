
import { 
    Box, 
    Typography, 
    styled 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";

import Email from '@/assets/icons/email.png';

import Instagram from '@/assets/icons/instagram.png'

const ContactContainer = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.Charcoal,
    padding: theme.spacing(4, 3),
    display: 'flex'
}))

const ContactTitle = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: '30px',
    fontWeight: '600',
    paddingBottom: theme.spacing(2)
}))
const ContactText = styled(Box)({
    display: 'flex',
    flexDirection: 'column'
});

const ContactDescription = styled(Typography)(({ theme }) => ({
    fontStyle: 'italic',
    color: Colors.White,
    paddingBottom: theme.spacing(1)
}));

const SocialContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    paddingBlock: theme.spacing(0.4)
}));

const EmailIcon = styled('img')({

})

const InstaIcon = styled('img')({

})

const SocialText = styled(Typography)({
    color: Colors.White,
    fontSize: '12px'
})

function Contact(){
    return(
        <ContactContainer>
            <ContactText>
                <ContactTitle>CONTACT US</ContactTitle>
                <ContactDescription fontWeight={'bold'}>
                    Let us know how we can assist you
                </ContactDescription>
                <SocialContainer>
                    <EmailIcon 
                        src={Email}
                        alt='email'
                    />
                    <SocialText>info@blankpageproduction</SocialText>
                </SocialContainer>
                <SocialContainer>
                    <InstaIcon 
                        src={Instagram}
                        alt='instagram'
                    />
                    <SocialText>blankpage_productions</SocialText>
                </SocialContainer>
                
                
            </ContactText>
        </ContactContainer>
    )
}

export default Contact;