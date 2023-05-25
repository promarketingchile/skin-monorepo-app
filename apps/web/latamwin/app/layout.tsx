
import 'ui-divergana/src/tailwind-base.scss';
import './../styles/variables.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
