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
    padding: 145px 5px 5px 5px;
}
`;

export const FormContent = styled.div`
width: 50vw;
padding: 50px 25px;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 700px) {
    width: 90%;
}
`;

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


export const TaskIcons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
