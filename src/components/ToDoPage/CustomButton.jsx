import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';


const CustomButton = styled(Button)({
    '&': {
        backgroundColor: '#f48c06',
        width: '100px',
    },
    '&:hover': {
        backgroundColor: '#e85d04',
    },
});

export default CustomButton