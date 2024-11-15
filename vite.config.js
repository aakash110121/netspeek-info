import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { googleFormsToJson } from 'react-google-forms-hooks'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'build-get-form',
      // async buildStart(options) {
        
      //   // can use both full and shortened form url
      //   console.log('fetching google form info')
      //   const result = await googleFormsToJson(
      //     'https://docs.google.com/forms/d/1vHSdQCYI6yMYMSFHJ2nSuO6wwhzE0Wc3dbyBkkajtmg/viewform'
      //   )
      //   console.log('fetched form:')
      //   console.log(JSON.stringify(result))
      // }
    }
  ],
})
