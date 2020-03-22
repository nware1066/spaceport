var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.validTypes = ['military', 'cargo', 'passenger']
    this.maxCrew = obj.maxCrew;
    this.odometer = obj.odometer || 0;
    this.fuelCapacity = obj.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = obj.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = obj.parts || {};

    for (var i = 0; i < this.validTypes.length ; i++) {
      if (this.validTypes[i] === obj.type) {
        this.type = obj.type;
      }
    }
  }

  addCrew(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      if (this.crew.length < this.maxCrew && crewMembers[i] instanceof Being) {
        this.crew.push(crewMembers[i]);
      }
    }
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  }

  updatePart(part) {
    if (part.type != undefined) {
      // update existing part
      if (this.parts[part.type]) {
        // don't forget the old value when you replace it
        var oldValue = this.parts[part.type].value;
      }
      // reassign the value and give me back the difference
      this.parts[part.type] = part;
      return oldValue - part.value
    }
  }

  checkReadiness() {
    var status = {readyToFly: false}
    // all parameters are combined to create a true response
    if (this.fuel && this.captain && Object.keys(this.parts).length) {
      status.readyToFly = true;
      status.notes = 'Good to go!';
    }
    if (!Object.keys(this.parts).length) {
      // can't .length an object, so this has basically turned the keys
      // of the object into an array so that it can iterate through them
      // to check the length
      status.notes = 'Cannot fly without all parts';
    }
    if (!this.fuel) {
      status.notes = 'Cannot fly without fuel';
    }
    if (!this.captain) {
      status.notes = 'Cannot fly without a captain';
    }
    return status;
  }
}

module.exports = Ship;
