import styled from "@emotion/styled";

export const DivLessons = styled.div`
    
    background-color: rgb(20, 150, 144);
    padding: 20px;
    color: white;
    box-shadow: 2px 3px 5px lightsteelblue;
    border: 1px solid lightsteelblue;
    border-radius: 15px;
    
    
    margin-bottom: 30px;
    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        height: 470px;
    }
`;

export const SpanTitle = styled.span`
    font-size: 40px;
    font-weight: 800;
    margin-left: 45px;
`;

export const H2 = styled.span`
    font-size: 30px;
    font-weight: 600;
    align-items: baseline;
    display: flex;
    justify-content: center;
`;

export const DivCourse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //box-shadow: 2px 3px 5px grey;
    //border: 1px solid lightsteelblue;
    //border-radius: 15px;
    //background-color: white;
    position: relative;
`;
export const PDescription = styled.p`
    font-size: 18px;
    color: rgb(20, 150, 144);
    font-weight: 900;
    
`;

export const ImgCourse = styled.img`

    width: 1200px;
    height: 250px;
    overflow: hidden;
    vertical-align: center;
    object-fit: cover;
    object-position: center;
`;

export const PlockedLessons = styled.p`
    display: block;
    border-radius: 15px;
    padding: 5px;
    //height: 80px;
    box-shadow: 2px 3px 5px darkred;
    color: white;
    border: 1px solid darkred;
    background: rgba(205, 0, 0, 0.5);
    position: absolute;
    top: 220px;
    right: 0;
`;