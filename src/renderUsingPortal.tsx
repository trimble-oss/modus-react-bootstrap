/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import * as React from 'react';
import { createPortal } from 'react-dom';

function renderUsingPortal(
  content: React.ReactElement | React.ReactNode | null,
  bodyRef: any,
) {
  return bodyRef && createPortal(content, bodyRef);
}

export default renderUsingPortal;
