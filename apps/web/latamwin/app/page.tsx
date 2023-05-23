import { toSlug } from '@acme/utils';
import { PrimaryButton } from 'ui-divergana';

import variables from 'ui-divergana/src/index.module.scss';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center bg-red-900 text-lg'>
				{toSlug('latamwin-chile')}
				<PrimaryButton>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
