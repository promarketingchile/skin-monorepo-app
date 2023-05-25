import { PrimaryButton } from 'ui-divergana';
import 'ui-divergana/src/tailwind-base.scss';

export default function Page() {
	return (
		<>
			<div className='flex w-full justify-center text-lg'>
				<PrimaryButton>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
