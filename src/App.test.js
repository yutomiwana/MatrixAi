// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MatrixAiLearn title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MatrixAiLearn/i);
    expect(titleElement).toBeInTheDocument();
});
