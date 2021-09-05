/*!
 * @file SaveToFile.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { SAMPLE_MACHINE_PROGRAM_NAME } from '../../../utils/machineConfiguration';

import { FileSupportWrapper } from './FilesSupport.styles';
import { ControlButton } from '../Controls/Controls.styles';

/**
 * @details Component responsible for generating the field and the button for saving and downloading the current state 
 *          of the code field in the form of a .txt file.
 * 
 * @returns { JSX.Element }
 */
const SaveToFile = () => {

    const { codearea } = useContext(StoreContext);

    /**
     * Function saves the current state of the field for entering the code to a file on the user's computer.
     */
    const downloadTxtFile = () => {
        const element = document.createElement('a');
        const file = new Blob([codearea], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = SAMPLE_MACHINE_PROGRAM_NAME;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <FileSupportWrapper 
            direction = 'left'
            pseudoContent = 'save program to file'
        >
            <ControlButton
                onClick = {downloadTxtFile}
            >
                Save to file
            </ControlButton>
            <div>Click here to save your program into .txt file.</div>
        </FileSupportWrapper>
    );
};

export default SaveToFile;