import React from 'react';
import { formatDate } from './utils';

describe('utils tests', () => {
  it('formatDate should format date correctly with DD.MM.YYYY format', () => {
    const formattedDate = formatDate(1628373600000, 'DD.MM.YYYY');
    expect(formattedDate).toEqual('08.08.2021');
  });

  it('formatDate should format date correctly with DD/MM/YYYY format', () => {
    const formattedDate = formatDate(1628373600000, 'DD/MM/YYYY');
    expect(formattedDate).toEqual('08/08/2021');
  });
});
