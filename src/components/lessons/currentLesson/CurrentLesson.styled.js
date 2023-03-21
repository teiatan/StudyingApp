import styled from "@emotion/styled";

export const Div = styled.div`
    
    @media screen and (min-width: 1200px) {
        min-width: 750px;
    }
`;

export const Button = styled.button`
    border-radius: 30px;
    padding: 15px;
    
    box-shadow: 2px 3px 5px darkred;

    background: rgba(20, 150, 144, 1);
    color: white;
    font-size: 20px;
    border: none;
    box-shadow: 2px 3px 5px lightgrey;

    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const DivControls = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;