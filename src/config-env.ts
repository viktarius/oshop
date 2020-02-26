const fs = require('fs');

const production = process.env.NODE_ENV === 'production';
const targetPath = production ? './src/environments/environment.prod.ts' : './src/environments/environment.ts';

require('dotenv').config();

const firebaseConfigFile = `{
  apiKey: '${process.env.apiKey}',
  authDomain: '${process.env.authDomain}',
  databaseURL: '${process.env.databaseURL}',
  projectId: '${process.env.projectId}',
  storageBucket: '${process.env.storageBucket}',
  messagingSenderId: '${process.env.messagingSenderId}',
  appId: '${process.env.appId}',
  measurementId: '${process.env.measurementId}'
}`;

const envConfigFile = `export const environment = {
  production: ${production},
  firebase: ${firebaseConfigFile}
};
`;

fs.writeFile(targetPath, envConfigFile, err => {
  if (err) {
    throw console.error(err);
  }
});
