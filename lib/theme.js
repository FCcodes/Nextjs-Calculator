import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 500,
            laptop: 980,
            desktop: 1300
        }
    },

    palette: {
        primary: {
            main: 'rgb(0, 0, 0)'
        }        
    }
    
})
   
theme = responsiveFontSizes(theme)



export default theme