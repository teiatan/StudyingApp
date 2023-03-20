import styled from '@emotion/styled';

export const Li = styled.li`
    
    box-shadow: 0px 2px 5px lightgrey;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 30px;
    position: relative;
    @media screen and (min-width: 1200px) {
        width: 550px;
    }

`;

export const Img = styled.img`
    //height: 250px;
    border-radius: 15px;
    //background-size: contain;

`;

export const Button = styled.button`
    display: block;
    border-radius: 20px;
    padding: 10px;
    //height: 80px;
    box-shadow: 2px 3px 5px darkred;
    //color: white;
    background-color: pink;
    //border: 1px solid gray;
    border: none;
    box-shadow: 2px 3px 5px lightgrey;
    

    @media screen and (min-width: 1200px) {
        position: absolute;
        top: 260px;
        right: 10px;
        z-index: 10;
    }
    
`;