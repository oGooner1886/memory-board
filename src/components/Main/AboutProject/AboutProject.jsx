import React, { useState } from "react";
import {styled} from 'styled-components'
import variablesText from './variablesText.js'
import { GreyText, Line, Container } from '../styleCss.js'


const RedText = styled.span`
    font-family: 'BebasNeueCyrillic', sans-serif;
    color: #A70000;
    font-size: 70px;

`

const DivInfo = styled.div`
    position:relative;
    margin:auto;
    margin-top: 44.84px;
    line-height:1.4em;
    column-count:2;
    column-gap:114px;
    max-width: 1014px;
    max-height: 822px;
    height: 100%;
`

const DivParagraf = styled.div`
    max-width: 450px;
    font-size: 18px;
    font-family: 'Involve', serif;
    margin-bottom: 10px;
`

const ButtonAuthor = styled.button`
    background-color: ${props => (props.isclicked)};
    color: #ffffff;
    width: 285px;
    height: 55.8px;
    margin-top: 44.84px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
`

const varT = variablesText

export default function AboutProject(){
    const [isPressed, setIsPressed] = useState('#261E1A');
    const handleMouseDown = () => {
        setIsPressed('#959595');

      };

      const handleMouseUp = () => {
        setIsPressed('#261E1A');

      };
    return (
        <Container style={{
            marginBottom: 165,
            }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                <GreyText style={{fontSize: 16, verticalAlign: 'top'}}>{varT.anchorTitle}</GreyText>
                {/* <RedText>{varT.greatQuote}</RedText> */}
                <RedText>{varT.greatQuote[0]}</RedText>
                <br/>
                <RedText>{varT.greatQuote[1]}</RedText>
                <br />
                <RedText>{varT.greatQuote[2]}</RedText>
                <br />
                <RedText style={{marginBottom: 44.84}}>{varT.greatQuote[3]}</RedText>
                <GreyText style={{
                    fontSize: 20,
                    alignSelf: 'flex-end',
                    marginBottom: 50.81
                }}>{varT.authorGreatQuote}</GreyText>
            </div>
            <Line/>

            <DivInfo>
                {varT.paragraphs.map(text=><DivParagraf key={text}>{text}</DivParagraf>)}
            </DivInfo>
            <div style={{
                maxWidth: 1014,
                margin: 'auto'
            }}>
                <ButtonAuthor isclicked={isPressed} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Об авторах проекта</ButtonAuthor>
            </div>
        </Container>
    )
}
