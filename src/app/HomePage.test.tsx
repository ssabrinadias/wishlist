import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  test('should render corretly the Page Home', async () => {
    render(await HomePage());
    screen.debug();
  });
});
