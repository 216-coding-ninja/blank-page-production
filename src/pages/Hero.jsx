import {
    Fragment,
    useEffect,
    useRef,
    useState
} from 'react';


import
    SoccerField
from '@/assets/images/soccer-field.png';

import
    Runners
from '@/assets/images/runners.png';

import
    SportPerson
from '@/assets/images/sport-person.png'

import{
    styled,
    Box,
    Divider
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

import HeroInfo from './HeroDetails/HeroInfo';


const SlideContainer = styled(Box)({
    position: "relative",
    width: '100%',
    height: '800px',
    overflow: 'hidden'
})

const Slide = styled('div')(({ isActive, imageUrl, theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: isActive ? '0' : '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'opacity 0.5s ease-in-out',
    opacity: isActive ? 1 : 0,
    paddingBlock: theme.spacing(5),
    overflow: 'hidden',
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
    right: 0
}))

const SlideButtonImg = styled('img')({
    width: '30px'
})

function Hero(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        SoccerField,
        Runners,
        SportPerson
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 9000);

        return () => clearInterval(interval);
    }, [slides.length]);


    const prevSlide = () => {
        const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(previousSlide);
    }

    const nextSlide = () => {
        const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlide)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return(
        <Fragment>
            <SlideContainer>
            
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        imageUrl={slide}
                        isActive={index === currentSlide}
                    >
                        <HeroInfo />
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