import styled from 'styled-components';

const Button = styled.button`
    background: #778899;
    font-size: 1.5rem;
    color: #ffff;
    text-align: center;
    outline: none;
    border: none;
    font-family: 'Arial';
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    width: fit-content;
    cursor: pointer;
    transition: 300ms all ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    :hover{
        color: #D3D3D3;
    }
`;

export default Button;