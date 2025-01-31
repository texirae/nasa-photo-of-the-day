import React from "react";
import styled from "styled-components";

const NasaTitle = styled.h3 `
    color: turquoise;
    font-size: 3em;
    font-family: georgia;
`
const Explanation = styled.p `
    color: magenta;
    font-family: georgia;
    font-size: 2em;
`
const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
`

const NasaPhoto = (props)=>{
    return(
        <WrapperDiv>
            <NasaTitle>{props.photo.title}</NasaTitle>
            <p>{props.photo.data}</p>
            <img src={props.photo.hdurl}/>
            <Explanation>{props.photo.explanation}</Explanation>
        </WrapperDiv>
    )
}

export default NasaPhoto;