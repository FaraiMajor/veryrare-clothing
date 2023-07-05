import styled from "styled-components";

export const ProductCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }
    

    @media screen and (max-width: 800px) {
        width: 100%;
        img {
            width: 100%;
            height: 70%;
        }

        
        button {
            display: block;
            opacity: 0.9;
            min-width: unset;
            top: 175px;
            padding: 0 10px;

            &:hover {
                img {
                    opacity: unset;
                }

                button {
                    opacity: unset;
                }
            }
        }
    }
    `;

export const Footer = styled.div`
        width: 95%;
        height: 5%;
        display: flex;
        flex-direction: column;
        font-size: 12px;

        @media screen and (max-width: 800px) {
            margin-left: 10px;       
        }
`;
export const Name = styled.span`
        width: 90%;
        margin-bottom: 5px;
        media screen and (max-width: 800px) {
            
        }
            
        `;

export const Price = styled.span`
        font-weight: 400;
        margin-top: 10px;         
`;