import 'tailwindcss/tailwind.css';
<<<<<<< HEAD
import 'ui-divergana/src/globals.scss';

=======
import '../../../packages/ui/ui-divergana/src/tailwind-base.scss'
>>>>>>> origin/feature/poc-component-class-variance
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}