import styled from 'styled-components'

// Padding: 1st value (top), 2nd value (R padding), 3rd value (bottom), 4th value (left)
export const StyledContainer = styled.div `
    max-width: 1200px;
    margin: 30px 30px 30px 30px;
    
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;
//`StyledImgContainer`is the name of the exported component.
//`styled.div~is a function provided by the `styled-components~that creates a styled version of an 
//HTML <div> element. In this case, it generates a styled <div> component.
//inside ``template literal, the CSS styles for the component are defined
//margin: 0 auto - sets the top and bottom margin to 0 and auto centers the component horizontally using auto
export const StyledImgContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border 2px solid blue;
    width: 500px;
    height: 600px;
    box-sizing: border-box;
`;

export const StyledImgEl = styled.img `
    height: 100%;
    object-fit: contain;
    width: 100%;
    border: 5px solid yellow;
`;