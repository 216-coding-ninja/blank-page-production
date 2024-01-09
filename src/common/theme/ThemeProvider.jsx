import { 
    typography 
} from "@/common/theme/typography";

import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles';

import { 
    CssBaseline 
} from "@mui/material";
import { Colors } from "../constants";

function ThemeProvider({
    children
}){
    const theme = createTheme({
        typography: typography(),
        components: {
            MuiTextField: {
              styleOverrides: {
                root: {
                  '& .MuiInputBase-input': {
                    color: Colors.White,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: Colors.White,
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
                },
              },
            },
          },
    })

    return(
        <MuiThemeProvider
          theme={theme}
        >   
            {children}
            
           
        </MuiThemeProvider>
    )
}

export default ThemeProvider;