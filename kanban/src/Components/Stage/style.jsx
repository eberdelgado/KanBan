import styled from "styled-components";


export const Container = styled.div`
    background-color: #1d77a0;
    width: 30vw;
    height: 90vh;
    margin: 2.5%;
    border-radius: 20px;
    border: solid 1px #010202;
    //padding-left: 10px;
`


export const Title = styled.div`
    text-align:center;
    width:100%;
    height: 10%;
    border-bottom: solid 2px;
`

export const TaskList = styled.div`
    height: 90%;
    width:100%;
    display:grid;
    justify-items:center;
    overflow: auto;
`

export const DivTask = styled.div`
    background-color: #f1f1f097;
    width:70%;
    height:20vh;
    margin-top:2.5%;
    border-radius:15px;
    cursor: move;
`
