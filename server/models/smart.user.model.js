const UserModel = require('./user.model');

class SmartUserModel extends UserModel {
  constructor({
    id,
    firstName,
    lastName,
    description,
    role,
    birthYear
  }) {
    super({id, firstName, lastName, description});
    this.role = role;
    this.birthYear = birthYear;
  }
  getSmartSentence() {
    return `I am smart and I am ${this.getRole()}. My name is ${super.getName()}`;
  }

  getBirthSentence() {
    const today = new Date();
    const yearNow = today.getFullYear();
    return `${super.getName()} was born ${yearNow - this.birthYear} years ago.`;
  }

  getDescription() {
    return `${this.description}`;
  }

  getRole() {
    return this.role;
  }

  getUrl() {
    return `/user/${this.id}`;
  }
}

module.exports = SmartUserModel;
