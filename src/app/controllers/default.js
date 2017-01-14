import app from '../app.js';

app
  .controller('DefaultController', function ($scope) {
    const vm = this;
    vm.thing = "TEST";
  });
