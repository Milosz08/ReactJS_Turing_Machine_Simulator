/**
 * @file LoadExamples.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Styled Component file.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import styled from 'styled-components';
import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';

import { ControlButton } from '../Controls/Controls.styles';

export const ExamplesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid ${NON_CHANGE_VALUES.BORDER_COLOUR};
    border-radius: 5px;
    width: 1300px;
    margin: 50px 0 30px 0;
    padding: 30px 0;
    ::after {
        position: absolute;
        content: 'example turing machine simulator programs';
        width: fit-content;
        top: -12px;
        padding: 0 10px;
        left: 50%;
        transform: translateX(-50%);
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
        border: 3px solid ${({ theme }) => theme.BODY};
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
        font-size: .8rem;
        text-transform: uppercase;
    }
`;

export const ExampleButton = styled(ControlButton)`
    width: fit-content;
`;