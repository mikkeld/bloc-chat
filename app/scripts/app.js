(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
        .state('chatroom', {
            url: '/',
            controller: 'ChatRoomCtrl as chatroom',
            templateUrl: '/templates/chatrooms.html'
        });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
