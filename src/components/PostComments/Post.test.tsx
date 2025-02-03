import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from './index';

test('deve permitir a inserção de dois comentários', () => {
    render(<Post />);

    const commentInput = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    // Primeiro comentário
    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);

    // Segundo comentário
    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    const comments = screen.getAllByTestId('comment-item');
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('Primeiro comentário');
    expect(comments[1]).toHaveTextContent('Segundo comentário');
});