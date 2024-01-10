import {
    Box,
    styled
} from '@mui/material';

const MapContainer = styled(Box)({
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
})

function GoogleMap(){
    return (
        <MapContainer>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3495375584184!2d27.919378774525025!3d-26.15274356187855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a1d018a4b0b1%3A0xf25f4a8d83c99f55!2sQuadrum%20Office%20Park!5e0!3m2!1sen!2sza!4v1704797681552!5m2!1sen!2sza" 
                width="359" 
                height="373" 
                allowfullscreen=""
                style={{ filter: 'invert(90%) hue-rotate(180deg)', border: 'none' }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </MapContainer>
    )
}

export default GoogleMap;