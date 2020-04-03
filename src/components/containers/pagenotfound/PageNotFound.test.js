import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

test('renders disclaimer title', () => {
    const { getByText } = render(<PageNotFound />);
    const linkElement = getByText(/Sorry, there's nothing to see here/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders home link', () => {
    const { getByText } = render(<PageNotFound />);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});