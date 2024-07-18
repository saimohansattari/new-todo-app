import styled from 'vue3-styled-components';

export const MainSection = styled.div`
width: 100%;
height: 100%;
padding: 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-width: 700px) {
    padding: 30px 5px 5px 5px;
}
`;

export const FormContent = styled.div`
width: 50vw;
padding: 10px 25px;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 700px) {
    width: 90%;
}
`;


export const SubDiv = styled.div`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
color: gray;
font-size: 16px;
width: 70%;
padding: 18px 15px;
border: none;
text-decoration: none;
background-color: white;
border-radius: 15px;

@media only screen and (max-width: 700px) {
    font-size: 13px;
}

`;


export const TaskList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
background-color: whitesmoke;
display: flex;
display: flex;
justify-content: center;
align-items: center;
`


export const TaskCard = styled.div`
width: 38vw;
padding: 10px;
background-color: white;
text-align: start;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media only screen and (max-width: 700px) {
    width: 90%;
}
`;

export const TaskText = styled.div`
width: 66%;
height: auto;
overflow-wrap: break-word;
padding: 8px 0px;
`;

export const smallText = styled.p`
color: gray;
font-size: x-small;
margin-top: 5px;

`


export const TaskIcons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;


//HeaderPage Styled Components

export const Header = styled.div`
width: 100%;
padding: 20px 85px;
background-color: white;
border-bottom: 1px solid gray;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 500px) {
    padding: 20px 40px;
}

`

export const Logo = styled.div`
/* width: 200px; */
`


export const HeaderText = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
font-weight:bolder;
/* gap: 5px; */
`;

export const TextS = styled.p`
font-size: small;
    font-weight:bolder;
    color: green;
    font-family: cursive;
    @media only screen and (max-width: 500px) {
    font-size:10px;
    
}

`;

export const TextXX = styled.p`
    font-size: larger;
    font-weight:bold;
    color: rgb(68, 98, 199);
    font-family: Montserrat,sans-serif;


    @media only screen and (max-width: 500px) {
    font-size:small;
    
}

`;