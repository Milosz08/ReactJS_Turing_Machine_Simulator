/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { codeAreaModes, machineModes } from './types';

export interface MachineInitialTypes {
    tapeValues: {
        initialInput: string;
        valuesArray: string[];
    };
    disabledControls: {
        initialInput: boolean;
        initialStateLabel: boolean;
        compileButton: boolean;
        controlButtons: boolean;
        resetButton: boolean;
    };
    headPosition: number;
    initialStateLabel: string;
    machineState: machineModes;
    allStatesCount: number;
    rawCodeAreaInput: string;
    machineTuples: {
        labels: { [key: string]: any }[];
        errors: { [key: string]: any }[];
    };
    actualState: {
        prevState: { [key: string]: string } | null;
        nextState: { [key: string]: string } | null;
    };
    sourceCodeAreaMode: codeAreaModes;
    machineFinish: boolean;
    findingLabel: string;
    allSteps: { [key: string]: string }[];
    allHeadPositions: number[];
    allBlanksElements: boolean[];
    machineCustomMessage: string | null;
}

const machineInitialState: MachineInitialTypes = {
    tapeValues: {
        initialInput: ' ',
        valuesArray: [],
    },
    disabledControls: {
        initialInput: false,
        initialStateLabel: false,
        compileButton: false,
        controlButtons: true,
        resetButton: true,
    },
    headPosition: 0,
    initialStateLabel: 'q0',
    machineState: machineModes.IDLE,
    allStatesCount: 0,
    rawCodeAreaInput: '',
    machineTuples: {
        labels: [],
        errors: [],
    },
    actualState: {
        prevState: null,
        nextState: null,
    },
    sourceCodeAreaMode: codeAreaModes.IDLE,
    machineFinish: false,
    findingLabel: 'q0',
    allSteps: [],
    allHeadPositions: [],
    allBlanksElements: [],
    machineCustomMessage: null,
};

export default machineInitialState;