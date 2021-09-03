/**
 * @file StaticStructure.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Styled Component file.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    max-width: 1920px;
    margin: 50px 0 40px 0;
    color: ${({ theme }) => theme.TEXT};
    a {
        color: ${({ theme }) => theme.TEXT_TINT1};
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const SideContent = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-basis: 50%;
    a {
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;

export const CenterContent = styled.div`
    flex-basis: 600px;
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
    h1 {
        font-size: 1.6rem;
        line-height: 1;
        font-weight: 500;
    }
    a {
        position: relative;
        top: -5px;
        font-size: 0.9rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT - 200};
    }
`;

export const ToggleDarkLightMode = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: .8rem;
    input[type = 'checkbox'] {
        opacity: 0;
	    position: absolute;
        :checked + label div {
            transform: translateX(14px);
        }
    }
    label {
        background-color: ${({ theme }) => theme.TEXT};
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 12px;
        width: 26px;
        transform: scale(1.5);
    }
    div {
        background-color: ${({ theme }) => theme.BODY};
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        height: 8px;
        width: 8px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }
    aside {
        margin: -3px 20px 0 20px;
    }
`;

export const HowToUseContainer = styled.div`
    width: 1300px;
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.TEXT};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    h3 {
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
    ol {
        margin: 10px 0 0 60px;
        li {
            padding: 2px 0;
            svg {
                margin: 0 10px;
                font-size: .9rem;
                color: ${({ theme }) => theme.TEXT};
            }
        }
    }
`;