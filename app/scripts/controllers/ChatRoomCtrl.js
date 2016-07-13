(function() {
  function ChatRoomCtrl(Room) {
    this.rooms = Room.all;
    this.currentRoom = null;
    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
    };
  }

  angular
  .module('blocChat')
  .controller('ChatRoomCtrl', ['Room', ChatRoomCtrl]);
})();
