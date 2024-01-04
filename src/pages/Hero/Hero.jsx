import {
    Fragment,
    useEffect,
    useRef,
    useState
} from 'react';



import
    Bafana
from '@/assets/images/bafana-bafana.png';


import{
    styled,
    Box,
    Divider,
    Container
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import 
    ArrowLeft
from '@/assets/icons/arrowLeft.png';

import 
    ArrowRight
from '@/assets/icons/arrowRight.png';

import 
    HeroInfo 
from './HeroDetails/HeroInfo';

import 
    FootBallVid
from '@/assets/video/football-animation.mp4';

import 
    HeroWelcome 
from './HeroLayouts/HeroWelcome';

import 
    SAFA 
from './HeroLayouts/SAFA';

import
    FootballStadium
from '@/assets/video/footage-stadium-night.mp4'

import Banyana from '@/assets/images/Banyana_Banyana.webp'

import WorldCup from './HeroLayouts/WorldCup';

import BanyanaItaly from '@/assets/images/south_africa_vs_italy.webp';
import ContactUs from '../ContactUs/ContactUs';



const SlideContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: '100%',
    height: 'calc(100vh - 71px)',
    overflow: 'hidden',
}))

const Slide = styled('div')(({ isActive }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: isActive ? '0' : '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isActive ? 1 : 0,
    
}));

const SlideButtonBoxLeft = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.Orange,
    padding: theme.spacing(2, 3),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 11,
    cursor: 'pointer',
    left: 0
}))

const SlideButtonBoxRight = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.Orange,
    padding: theme.spacing(2, 3),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 11,
    cursor: 'pointer',
    right: 0,
}))

const SlideButtonImg = styled('img')({
    width: '30px'
})

const Video = styled('video')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})

const Img = styled('img')({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})

const Overlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 5, 
}));

const HeroDetails = styled(Box)(({ index, theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 5,
    display: 'flex',
    justifyContent: index === 0 ? 'center' : '',
    alignItems: 'center',
    paddingBlock: index !== 0 ? '70px' :'80px',
    [theme.breakpoints.down(900)]:{
        justifyContent: index === 0 ? 'center' : 'center'
    }
}))

function Hero(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }

    useEffect(() => {
        const transitionDelay = 8000;
        const transitionInterval = setInterval(goToNextSlide, transitionDelay);

        return () => clearInterval(transitionInterval)
    },[currentSlide])

    const getLayoutRender = (currentIndex) => {
        let renderedLayout = null;
        const currentLayout = layouts[currentIndex];

        switch(currentLayout.layoutType){
           
            case 'leftElements':
                renderedLayout = (
                    <WorldCup />
                );
                break;
            case 'leftBottomElements':
                renderedLayout = (
                    <SAFA />
                )
                break;
            default:
                renderedLayout = (
                    <HeroWelcome />
                );
                break;
        }

        return renderedLayout
    }

    const slides = [
       {
            type: 'video',
            url: FootBallVid
       },
       {
            type: 'image',
            url: Bafana 
       },
       {
            type: 'image',
            url: BanyanaItaly
       }
    ];

    const layouts = [
        {
            layoutType: 'centerElements'
        },
        {
            layoutType:'leftElements',
        },
        {
            layoutType: 'leftBottomElements'
        }
    ];


    return(
        <Fragment>
            <SlideContainer>
            
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        imageUrl={slide}
                        isActive={index === currentSlide}
                    >
                        {slide.type === 'video' ? (
                            <Video
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                src={slide.url} 
                            />
                        ) : (
                            <Img 
                                src={slide.url} 
                                alt="slide" 
                            />
                        )}
                        
                        <Overlay />
                        <HeroDetails
                            index={index}
                        >
                            <Box style={{
                                marginInline: '190px'
                            }}>
                                {getLayoutRender(index)}
                            </Box>
                            
                        </HeroDetails>
                        
                    </Slide>
                ))}

                <SlideButtonBoxLeft
                    onClick={() => setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1)}
                >
                    <SlideButtonImg 
                        alt='arrow'
                        src={ArrowLeft}
                    />
                </SlideButtonBoxLeft>

                <SlideButtonBoxRight
                    onClick={() => setCurrentSlide((prevSlide) => prevSlide === slides.length - 1 ? 0 : prevSlide + 1)}
                >
                    <SlideButtonImg 
                        alt='arrow'
                        src={ArrowRight}
                    />
                </SlideButtonBoxRight>
            </SlideContainer>
        
        </Fragment>
        
    )
}

export default Hero;