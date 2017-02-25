import React from 'react';
import { render } from 'react-dom';

import Example from './example';


export const mount = target => render(<Example />, target);
