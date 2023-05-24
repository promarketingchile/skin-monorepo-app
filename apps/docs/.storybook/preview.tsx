import 'tailwindcss/tailwind.css';
import '../../../packages/ui/ui-divergana/src/tailwind-base.scss'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}