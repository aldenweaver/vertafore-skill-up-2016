import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {SuperApp} from './components/SuperApp';
import {AldensApp} from './components/aldensApp';

bootstrap(App)
  .then(()=> console.log(`App Running...`))
  .catch(err => console.log(err));
