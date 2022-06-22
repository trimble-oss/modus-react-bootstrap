/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
/**
 * A custom state hook for handling controlled states ex: Tree View -> `expanded` state
 */
import { useEffect, useCallback, useRef, useState } from 'react';

export default function useCustomState(prop, defaultProp) {
  const [value, setValue] = useState(defaultProp);
  const ref = useRef();

  useEffect(() => {
    if (prop !== undefined && ref.current !== prop) {
      ref.current = prop;
      setValue(prop);
    }
  }, [prop]);

  const setValueFn = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return [value, setValueFn];
}
