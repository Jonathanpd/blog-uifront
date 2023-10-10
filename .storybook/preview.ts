import type { Preview } from '@storybook/react'

import '../node_modules/tailwindcss/tailwind.css'

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true // Enable dark mode by default on all stories
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
