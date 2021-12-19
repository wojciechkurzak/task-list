import TextField from '@mui/material/TextField'
import {styled} from '@mui/material/styles';


const CustomTextField = styled(TextField)({
    '&': {
        marginBottom: '16px',
    },
    '& input': {
        color: '#fff',
    },
    '& textarea': {
        color: '#fff',
    },
    '& label': {
        color: '#fff',
    },
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#f48c06',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#f48c06',
            borderSize: 'none',
        },
        '&:hover fieldset': {
            borderColor: '#f48c06',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },
});

export default CustomTextField