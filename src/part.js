class Part {
  constructor(obj) {
    this.name = obj.name;
    this.value = obj.value;
    this.broken = false;
    this.validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined
    ];


    for (var i = 0; i <= this.validTypes.length; i++) {
      if (this.validTypes[i] === obj.type) {
        this.type = obj.type;
      }
    }
  }


  isValid() {
    if (this.name && this.type && this.value) {
      return true;
    } else {
      return false;
    }
  }

}


module.exports = Part;
