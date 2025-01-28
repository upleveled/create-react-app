/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import SvgComponent, { SvgComponentWithRef } from './SvgComponent';
import ReactDOMClient from 'react-dom/client';

describe('svg component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOMClient.createRoot(div).render(<SvgComponent />);
    expect(div.textContent).toBe('logo.svg');
  });

  it('svg root element equals the passed ref', () => {
    const div = document.createElement('div');
    const someRef = React.createRef();
    ReactDOMClient.createRoot(div).render(
      <SvgComponentWithRef ref={someRef} />
    );
    const svgElement = div.getElementsByTagName('svg');
    expect(svgElement).toHaveLength(1);
    expect(svgElement[0]).toBe(someRef.current);
  });
});
