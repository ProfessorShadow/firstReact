import { createTheme } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"
import { red } from "@material-ui/core/colors"
export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    },
    myButton: {
        backgroundColor: red,
        color: "white",
    }
})