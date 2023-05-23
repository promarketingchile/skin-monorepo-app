import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';

import 'tailwindcss/tailwind.css';
import 'ui-divergana/src/index.module.scss';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg'>
				<h2>{toSlug('latamwin-chile')}</h2>
				<PrimaryButton>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
