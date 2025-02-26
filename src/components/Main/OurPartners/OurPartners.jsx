import { GreyText, Line, Container } from "../styleCss"
import styled from "styled-components"
import minGos from "../../../assets/img/Group39877.svg"
import digRus from "../../../assets/img/Group39876.svg"

const DivOurPart = styled.div`
    width: 355px;
    height: 219px;
    background-color: #E0E0E0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const lstImgPartners = [minGos, digRus, false, false, false]

export default function OurPartners(){
    return (
        <Container style={{
            maxHeight: 312,
            height: '100%'
        }}>
            <GreyText style={{
                fontSize: 16
            }}>// Наши партнеры</GreyText>
            <Line style={{marginBottom: 23, marginTop: 45}}/>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                {lstImgPartners.map((url,indx)=>{
                    return(
                    <DivOurPart key={indx}>
                        {url&&<img src={url}/>}
                    </DivOurPart>)
                })}
                </div>
        </Container>
    )
}
