import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';


import './../style.scss';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg bg-winchile-base'>
				<h2>{toSlug('latamwin-chile')}</h2>
				<PrimaryButton className='bg-winchile-content'>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
