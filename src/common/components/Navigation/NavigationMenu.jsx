import { 
    Colors 
} from '@/common/constants';

import{
    styled,
    Box,
    Typography
}from '@mui/material';

import 
    SearchImg
from '@/assets/icons/search.png'

const NavigationMenuContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
})

const SearchInput = styled('input')(({ theme }) => ({
    backgroundColor: Colors.LightGrey,
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    paddingLeft: theme.spacing(2),
    paddingBlock: theme.spacing(1),
    marginLeft: theme.spacing(2),

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

const NavLink = styled(Typography)(({ theme }) => ({
    color: Colors.Black,
    fontSize: '14px',
    cursor: 'pointer',
    gap: theme.spacing(3),
    '&:hover': {
        color: Colors.Orange
    }
}))

function NavigationMenu(){
    return(
        <NavigationMenuContainer>
            <InputContainer>
                <SearchInput placeholder='Search...' type='text'/>
                <IconContainer>
                    <SearchIcon src={SearchImg} alt='search'/>
                </IconContainer>
            </InputContainer>

            <NavLinkBox>
                <NavLink>HOME</NavLink>
                <NavLink>SHOP</NavLink>
                <NavLink>ABOUT</NavLink>
                <NavLink>CONTACT</NavLink>
                <NavLink>FAQ</NavLink>
            </NavLinkBox>
            
        </NavigationMenuContainer>
    )
}

export default NavigationMenu;