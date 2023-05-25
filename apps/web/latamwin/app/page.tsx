import { PrimaryButton } from 'ui-divergana';
import 'ui-divergana/src/tailwind-base.scss';
// TODO: scss styles loaded outside de project are not being applied, nevertheless the file is loaded.
import 'ui-divergana/src/components/Buttons/PrimaryButton/PrimaryButton.module.scss';
//only local styles are applied
//import './styles/localStyle.scss';

export default function Page() {
	return (
		<>
			<div className='PrimaryButton flex w-full justify-center text-lg'>
				<PrimaryButton>Botón Primario</PrimaryButton>
			</div>
		</>
	);
}
