import '../styles/index.scss';

console.log('webpack starterkit au');

import $ from "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";

$(document).ready(function () {
  const message = 'Hello, World!';
  console.log(message)
  window.console.log("dom ready");
});