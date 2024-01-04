import { 
    Colors 
} from "@/common/constants";

import { 
    styled,
    Box,
    Typography,
    Divider,
    Modal
} from "@mui/material";

import 
    BlockPattern 
from "@/pages/Hero/components/BlockPattern";

import BlankPageBtn from "@/common/components/BlankPageBtn";
import { useEffect, useState } from "react";

import CloseIcon from '@mui/icons-material/Close';

import 
    BafanaSquadList 
from '@/assets/images/Bafana-squad.webp';

const WorldCupContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2)
}))

const EventName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.OpacWhite,
    paddingBottom: theme.spacing(1.5),
    display: 'flex',
    [theme.breakpoints.down(900)] : {
        textAlign: 'center',
        justifyContent: 'center'
    }
}));

const WorldCupTitle = styled(Typography)(({ theme }) => ({
    fontSize: '38px',
    color: Colors.White,
    fontWeight: '600',
    maxWidth: '928px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down(1145)]: {
        fontSize: '30px',
        maxWidth: '800px'
    },
    [theme.breakpoints.down(1096)]: {
        maxWidth: '600px'
    },
    [theme.breakpoints.down(900)] : {
        textAlign: 'center'
    }
}))

const HeroDivider = styled(Divider)(({ theme }) => ({
    width: '100%',
    borderWidth: '1px',
    borderColor: Colors.White,
    marginBottom: theme.spacing(3),
}));

const WorldCupDetailInfo = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: Colors.White,
    fontWeight: '200',
    maxWidth: '851px',
    [theme.breakpoints.down(900)]:{
        textAlign: 'center'
    }
}))

const UnderlineText = styled(Typography)(({ theme }) => ({
    textDecorationLine: 'underline',
    paddingInline: theme.spacing(.5)
}))

const ModalSquadList = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    backgroundImage: `url(${BafanaSquadList})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    outline: 'none'
})

const SquadModal = styled(Modal)({
    outline: 'none',
    '.MuiPaper-root': {
        border: 'none',
        boxShadow: 'none',
        backgroundColor:'transparent'
    }
})

const SquadContainer = styled(Box)({
    outline: 'none',
})

const Close = styled(CloseIcon)({
    fontSize: '40px',
    color: Colors.White,
    position: 'absolute',
    top: '-34px',
    right: '10px',
    cursor: 'pointer',
    zIndex: 1,
})
function WorldCup({setIsModalOpen}){

    const [open, setOpen] = useState(false);

    const handleOpenSquadList = () => {
        setOpen(true);
        setIsModalOpen(true);
    }

    const handleCloseSquadList = () => {
        setOpen(false);
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (open) {
          setIsModalOpen(true);
        } else {
          setIsModalOpen(false);
        }
    }, [open, setIsModalOpen]);
    return (
        <WorldCupContainer>
        
            <WorldCupTitle variant="h5">
                hugo broos announces his 23-man bafana bafana squad for afcon COTE D’VOIRE 2023
            </WorldCupTitle>
            <HeroDivider />

            {/*<WorldCupDetailInfo>
                Bafana Bafana are in Group E along with other countries
            </WorldCupDetailInfo>*/}
            <BlankPageBtn btnText={'READ MORE'} onClick={handleOpenSquadList}/>
            
            <BlockPattern />
                <SquadModal
                    open={open}
                >     
                    <ModalSquadList>
                        <Close onClick={handleCloseSquadList}/>  
                    </ModalSquadList>                
                </SquadModal>
        </WorldCupContainer>
    )
}

export default WorldCup;