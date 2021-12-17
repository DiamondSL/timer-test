import styled from 'styled-components';


const CardDiv = styled.div`
display: grid;
grid-auto-flow: ${(props) => (props.row ? "row" : "column")};
justify-items: center;
justify-content: center;
background: transparent;
width: auto;
background: ${(props) => (props.background ? `${props.background}` : "transparent")}; 
padding: ${(props) => (props.padding ? `${props.padding}` : "1rem 2rem")}; 
border-radius: 10px;
gap: ${(props) => (props.row ? "0.5%" : "2%")};
`;


export default CardDiv;


