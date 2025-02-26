import {styled} from 'styled-components'


const GreyText = styled.span`
font-family: 'Involve', serif;
color: #878787;
`

const Line = styled.hr`
    display: block;
    height: 1px;
    border: none;
    border-top: 1px solid #CECECE;
    margin: 1em 0;
    padding: 0;
`
const Container = styled.div`
    max-width: 1860px;
    width: 100%;
    margin: 0 auto;
`

export {GreyText, Line, Container}
