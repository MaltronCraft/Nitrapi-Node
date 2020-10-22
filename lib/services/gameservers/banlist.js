'use strict';

class ApplicationServer {
  constructor (service) {
    this.service = service;
  }

  getBanlist (success, failure) {
    this.service.nitrapi.dataGet('services/' + this.service.id + '/gameservers/games/banlist', {}, success, failure);
  }

  addBanlist (success, failure, command) {
    this.service.nitrapi.dataPost('services/' + this.service.id + '/gameservers/games/banlist', {
      'identifier': identifier
    }, success, failure);
  }
  
    removeBanlist (success, failure, command) {
    this.service.nitrapi.dataDelete('services/' + this.service.id + '/gameservers/games/banlist', {
      'identifier': identifier
    }, success, failure);
  }
}

module.exports = banlist;
