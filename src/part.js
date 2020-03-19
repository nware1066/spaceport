class Part {
  constructor(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.value = obj.value;
    this.broken = false;
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
