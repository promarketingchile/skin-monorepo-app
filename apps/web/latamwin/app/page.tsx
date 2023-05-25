import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';
import 'ui-divergana/src/tailwind-base.scss';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg'>
				<h2 className={'bg-purple-800'}>{toSlug('latamwin-chile')}</h2>
				<PrimaryButton>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
