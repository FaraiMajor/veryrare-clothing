import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;    
    
    h2{
    margin: 10px 0;

    @media screen and (max-width: 800px) {
        // width: 350px;

    }
}
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    Button {
    margin-right: 5px;
}

@media screen and (max-width: 800px) {
    width: 365px;

}
`;

