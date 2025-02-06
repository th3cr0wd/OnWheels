import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'OnWheels',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Show splash for 3 seconds
      backgroundColor: "#ffffff", // Change to your preferred color
      androidScaleType: "CENTER_CROP",
      showSpinner: false
    }
  }
};

export default config;

