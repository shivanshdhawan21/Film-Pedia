import { Pagination, ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/material/styles'
const darkTheme=createTheme({
    palette:{
        mode:"dark",
    },
});
const CustomPagination = ({setPage,numberOfPages}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10,
            paddingTop:20,
        }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination count={numberOfPages} onChange={(i)=> handlePageChange(i.target.textContent)}
                hideNextButton
                hidePrevButton
                color="primary" />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
