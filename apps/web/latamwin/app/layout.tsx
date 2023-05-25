import 'tailwindcss/tailwind.css';
import 'ui-divergana/src/tailwind-base.scss';
import 'ui-latamwin/styles.css';

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
