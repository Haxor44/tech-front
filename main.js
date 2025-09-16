import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import YachtLanding from './YachtLanding.vue'

// Create Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#00695C',
          secondary: '#004d4d',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ff9800',
          info: '#2196f3',
          success: '#4caf50'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
})

// Create and mount the app
createApp(YachtLanding)
  .use(vuetify)
  .mount('#app')
