/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import Search from '../components/search/Search';

describe('NewsSearch container', () => {
  test('renders the search and displays search results', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading...');

    const mockSearch = jest.fn();
    // eslint-disable-next-line max-len
    const { queryByPlaceholderText } = render(<Search mockSearch={mockSearch}/>);
    // eslint-disable-next-line max-len
    const searchInput = queryByPlaceholderText('What information would you like?');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    return waitFor(async () => {
      const ul = await screen.findByRole('list');
      expect(ul).not.toBeEmptyDOMElement();
    }, 6000);
  });
});
