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
`;

export const FormContent = styled.div`
width: 50vw;
padding: 50px 25px;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
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
`;


export const TaskList = styled.div`
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
padding: 20px 15px;
background-color: white;
text-align: start;
display: flex;
justify-content: space-between;
`;


export const TaskIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`