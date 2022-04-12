// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  imageUrl: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyAozA73gFVDf0Ylzx1JXxhVxt2VuhUuvUM',
    authDomain: 'cutiefood-1a176.firebaseapp.com',
    databaseURL:
      'https://cutiefood-1a176-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cutiefood-1a176',
    storageBucket: 'cutiefood-1a176.appspot.com',
    messagingSenderId: '497516395995',
    appId: '1:497516395995:web:bef37070bdba17e4f83bfe',
    measurementId: 'G-DPN1GZGSK2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
