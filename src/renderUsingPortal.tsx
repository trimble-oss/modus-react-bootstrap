import * as React from 'react';
import { createPortal } from 'react-dom';

function renderUsingPortal(
  content: React.ReactElement | React.ReactNode | null,
  bodyRef: any,
) {
  return bodyRef && createPortal(content, bodyRef);
}

export default renderUsingPortal;
