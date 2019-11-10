// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appID: "328bef88d52d49a6cc1c090695d8372b",
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=",
  forcastURL: "https://api.openweathermap.org/data/2.5/forecast?q=",
  countryURL: "https://restcountries.eu/rest/v2/all",
  config: {
    apiKey: "AIzaSyB-xat_EnA4GgRfkJWG_YyYJqjUB5bmttY",
    authDomain: "appweather-18ff3.firebaseapp.com",
    databaseURL: "https://appweather-18ff3.firebaseio.com",
    projectId: "appweather-18ff3",
    storageBucket: "appweather-18ff3.appspot.com",
    messagingSenderId: "227281531524",
    appId: "1:227281531524:web:efd569ff1bbc58bc3908d1",
    measurementId: "G-ZP3K1YLB2L"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
