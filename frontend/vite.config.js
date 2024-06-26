import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/ghar':{
        target:'http://localhost:3000',
        secure:false
      },
      'gharaustralia-f0919.firebaseapp.com':{
        target:''
      }
    }
  }
})
