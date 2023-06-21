import styled from 'styled-components'

// Padding: 1st value (top), 2nd value (R padding), 3rd value (bottom), 4th value (left)
export const StyledContainer = styled.div `
    max-width: 1200px;
    border: 2px solid red;    

    @media (max-width: 1200px) {
        padding: 5% 5% 5%;
      }
`;
//`StyledImgContainer`is the name of the exported component.
//`styled.div~is a function provided by the `styled-components~that creates a styled version of an 
//HTML <div> element. In this case, it generates a styled <div> component.
//inside ``template literal, the CSS styles for the component are defined
//margin: 0 auto - DO NOT DELETE sets the top and bottom margin to 0 and auto centers the component horizontally using auto
export const StyledImgContainer = styled.div `
    display: block;
    justify-content: center;
    align-items: center;
    border 2px solid blue;
    margin: 0 auto;
    width: 1000px;
    height: 570px;
    padding-top: 10px;

    @media (max-width: 768px) {
        max-width: 90%;
        height: auto;
        padding-top: 30px;
      }
`;

export const StyledImgEl = styled.img `
    height: 100%;
    object-fit: contain;
    width: 100%;
    border: 5px solid yellow;
`;