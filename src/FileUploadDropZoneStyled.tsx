/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const UPLOAD_STATES = {
  default: {
    text: '#6a6e79',
  },
  drop: {
    text: '#0063a3',
    background: '#dcedf9',
  },
  error: {
    text: '#ab1f26',
    background: '#fbd4d7',
  },
  disabled: {
    text: '#6a6e79',
    background: '#cbcdd6',
  },
};
const FileUploadDropZoneStyled = styled.div<{ state: string }>`
  ${({ state }) =>
    css`
      position: relative;
      background-color: #ffffff;
      color: ${UPLOAD_STATES[state].text};
      .file-drop-zone-overlay {
        border: 2px dotted #a3a6b1;
        background-color: ${UPLOAD_STATES[state].background};
        opacity: ${state === 'error' || state === 'disabled' ? '50%' : '100%'};
        border-color: ${UPLOAD_STATES[state].text};
        z-index: 1;
        position: absolute;
      }
    `}
  ${({ state }) =>
    state === 'disabled' &&
    css`
      * {
        cursor: no-drop !important;
      }
    `}

  .file-drop-zone-content {
    z-index: 2;
  }
  .browse {
    cursor: pointer;
    font-size: inherit;
  }
  .file-upload-dropzone-reset {
    position: relative;
    padding-top: 1%;
    div.reset-container {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 2;
      text-align: center !important;
    }
  }
`;

export default FileUploadDropZoneStyled;
