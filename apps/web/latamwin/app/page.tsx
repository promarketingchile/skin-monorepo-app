import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg'>
				<h2>{toSlug('latamwin-chile')}</h2>
				<PrimaryButton color='secondary' >Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
