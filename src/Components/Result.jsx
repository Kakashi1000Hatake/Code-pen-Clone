import { useContext,useState, useEffect } from 'react';
import {Box, styled} from '@mui/material';
import {DataContext} from '../Context/DataProvider'
let Container = styled(Box)`
    height=40vh;
`
const Result = () =>{
    const [src, setSrc] = useState('');
    const {html,css,js} =useContext(DataContext);
    const srcCode=`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() =>{
        const timeout = setTimeout(()=> {
            setSrc(srcCode);
        },2000)
        return() => clearTimeout(timeout);
    },[html,css,js])
    return(
        <Container>
            <iframe
             srcDoc={src}
             title="Output"
             sandbox='allow-scripts'
            //  frameBorder={0}
             width="100%"
             height="270vh"
            />
        </Container>
    )
}
export default Result;