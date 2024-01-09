
import { 
    Box, 
    Button, 
    TextField, 
    Typography, 
    styled 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";

import Email from '@/assets/icons/email.png';

import Instagram from '@/assets/icons/instagram.png'
import BlankPageBtn from "@/common/components/BlankPageBtn";
import GoogleMap from "./GoogleMap";
import DarkMap from "./GoogleMap";
import { 
    useForm, 
    ValidationError 
} from '@formspree/react';

const ContactContainer = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.Charcoal,
    padding: theme.spacing(4, 4),
    display: 'flex',
    gap: theme.spacing(4),
    zIndex: 2
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
    paddingBottom: theme.spacing(1),
    fontSize: '13px'
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
    fontSize: '12px',
})

const ContactForm = styled('form')(({ theme }) => ({
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column'
}))

const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '400px',
    marginBottom: theme.spacing(2.5),
    '& .MuiInputBase-input': {
      color: Colors.White,
      paddingBlock: theme.spacing(1.3)
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: Colors.StrokeGrey,
      },
      '&:hover fieldset': {
        borderColor: Colors.Orange,
      },
      '&.Mui-focused fieldset': {
        borderColor: Colors.Orange,
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: Colors.Orange,
    },
  }));

  const SubmitMessage = styled(Typography)({
    color: Colors.White,
    fontSize: '20px'
  })
  

function Contact(){
    const [state, handleSubmit] = useForm("meqyqydn");
    if (state.succeeded) {
        return (
            <SubmitMessage>
                Thank you for contacting us! We will get in touch with you shortly.
            </SubmitMessage>
        );
    }

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
                    <SocialText>info@blankpageproduction.co.za</SocialText>
                </SocialContainer>
                <SocialContainer>
                    <InstaIcon 
                        src={Instagram}
                        alt='instagram'
                    />
                    <SocialText>blankpage_productions</SocialText>
                </SocialContainer>
                
                <ContactForm onSubmit={handleSubmit}>
                    <CustomTextField 
                        placeholder="Your name & surname"
                        type="text"
                        name='name'
                    />

                    <CustomTextField 
                        placeholder="Your email address"
                        type="email"
                        name='email'
                    />

                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                    <CustomTextField 
                        placeholder="Write your message here"
                        type="text"
                        name='message'
                    />

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <BlankPageBtn 
                        btnText={'Send Message'}
                        type="submit"
                        disabled={state.submitting}
                    />
                    
                </ContactForm>
                
            </ContactText>

            <DarkMap />
        </ContactContainer>
    )
}

export default Contact;