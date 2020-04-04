/* 
 *  
 *  File: App.test.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
