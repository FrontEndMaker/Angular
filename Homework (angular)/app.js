angular.module('App', [])
.controller('AppController', function() {
  var people = this;
  people.list = [
    {name: 'Иванов Иван Иванович'},
    {name: 'Петров Петр Петрович'},
    {name: 'Алексеев Алексей Алексеевич'}
  ]
});
