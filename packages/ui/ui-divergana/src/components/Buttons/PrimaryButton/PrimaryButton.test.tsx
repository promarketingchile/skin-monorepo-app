import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PrimaryButton from './PrimaryButton.module';

describe('PrimaryButton', () => {

	test('Validate Button Text', () => {
		render(<PrimaryButton data-testid={'test-button'}>PrimaryButton</PrimaryButton>);
		expect(screen.getByTestId('test-button')).toHaveTextContent('PrimaryButton')
	});

});
