import { describe, expect, test } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimaryButton from './PrimaryButton.module';

const mockCallback = jest.fn((x) => 10 + x);

describe('PrimaryButton', () => {
	test('Text should be Text', () => {
		render(<PrimaryButton onClick={() => mockCallback(10)}>Sample</PrimaryButton>);
		userEvent.click(screen.getByText('Sample'));

		expect(mockCallback.mock.results[0].value).toBe(20);
	});
});
