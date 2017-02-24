App = angular.module('AdoBot', [
    'ui.router',
    'ngRoute',
    'btford.socket-io',
    'ui.bootstrap',
    'ngAnimate',
    'toastr',
    'angular-duration-format',
    'angularMoment',
    'http-auth-interceptor',
    'uiGmapgoogle-maps'
  ])
  .config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      // key: 'AIzaSyCU86vupyU0nMI7QvDnfJXteNxLyfrMSDg',
      v: '3.26', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  }])
  .run([
    '$http',
    '$rootScope',
    function($http, $rootScope) {
      $http.defaults.headers.common.username = localStorage.getItem('username')
      $http.defaults.headers.common.password = localStorage.getItem('password')
      $rootScope.$on('event:auth-loginRequired', function(event, data) {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        window.location.reload()
      })
    }
  ])
