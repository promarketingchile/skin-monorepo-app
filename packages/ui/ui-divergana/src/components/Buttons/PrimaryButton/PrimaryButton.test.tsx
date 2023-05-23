import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ShallowRenderer from 'react-test-renderer/shallow'; 
import PrimaryButton from './PrimaryButton.module';

describe('PrimaryButton', () => {

	test('Validate Button Text', () => {
		render(<PrimaryButton data-testid={'test-button'}>PrimaryButton</PrimaryButton>);
		expect(screen.getByTestId('test-button')).toHaveTextContent('PrimaryButton')
	});

});
