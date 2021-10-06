/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import styled from 'styled-components';

import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';
import { ControlButton } from '../Controls/Controls.styles';

const { BORDER_COLOUR } = NON_CHANGE_VALUES;

export const ExamplesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid ${BORDER_COLOUR};
    border-radius: 5px;
    width: 1300px;
    margin: 50px 0 30px 0;
    padding: 30px 0;
    position: relative;
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