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

function ThemeProvider({
    children
}){
    const theme = createTheme({
        typography: typography()
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