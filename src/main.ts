import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



let docTitle = document.title;
let alertShow = false;

window.addEventListener("blur", () => {
  document.title = "Hey! See You Soon :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
  clearInterval(intervalId);
});

let intervalId = setInterval(() => {
  if (document.hasFocus()) {
    document.title = alertShow ? "Voice Recognition " : "This Project Make by Syfrox – IT Services and IT Consulting";
    alertShow = !alertShow;
  }
}, 3600);

