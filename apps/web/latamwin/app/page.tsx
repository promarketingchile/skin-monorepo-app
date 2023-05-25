import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg bg-test-default'>
				<h2>{toSlug('latamwin-chile')}</h2>
				<PrimaryButton intent='primary' >Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
