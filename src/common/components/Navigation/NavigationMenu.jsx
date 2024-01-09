import { 
    Colors 
} from '@/common/constants';

import{
    styled,
    Box,
    Divider,
    Typography
}from '@mui/material';

import 
    SearchImg
from '@/assets/icons/search.png';

import { 
    Link,
    useLocation 
} from 'react-router-dom';

const NavigationMenuContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
})

const SearchInput = styled('input')(({ theme }) => ({
    backgroundColor: Colors.LightGrey,
    border: 'none',
    borderRadius: '3px',
    outline: 'none',
    paddingLeft: theme.spacing(2),
    paddingBlock: theme.spacing(1.2),
    marginLeft: theme.spacing(2),
    width: '255px',

    '&::placeholder': {
        color: Colors.Grey
    }
}))

const IconContainer = styled('div')({
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)'
})

const InputContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))

const SearchIcon = styled('img')({
    width: '12px'
})

const NavLinkBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(5),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}))

const NavLink = styled(Link)(({ theme, isactive }) => ({
    color: Colors.White,
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: '',
    cursor: 'pointer',
    gap: theme.spacing(3),
    '&:hover': {
        color: Colors.Orange
    },
    ...(isactive && {
        color: Colors.Orange,
        fontWeight: 'bold'
    })
}));

const TypographyLink = styled(Typography)({
    fontSize: '15px'
})

const NavigationDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: Colors.White,
    transform: 'rotate(180deg)',
    borderWidth: '1px',
    marginRight: theme.spacing(2)
}))

const InputContent = styled(Box)({
    display: 'flex'
})

function NavigationMenu(){


    return(
        <NavigationMenuContainer>
            <InputContent>
                <NavigationDivider />
                <InputContainer>
                    <SearchInput 
                        placeholder='Search...' 
                        type='text'
                    />
                    <IconContainer>
                        <SearchIcon 
                            src={SearchImg} 
                            alt='search'
                        />
                    </IconContainer>
                </InputContainer>
            </InputContent>

            <NavLinkBox>
                <NavLink isactive={location.pathname === '/'} to='/'>
                    <TypographyLink>
                        HOME
                    </TypographyLink>
                </NavLink>
               <NavLink isactive={location.pathname === '/aboutus'} to='/aboutus'>
                    <TypographyLink>
                        ABOUT US
                    </TypographyLink>
                    
                </NavLink>   
            </NavLinkBox>
            
        </NavigationMenuContainer>
    )
}

export default NavigationMenu;