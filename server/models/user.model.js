class UserModel {

  constructor({id, firstName, lastName, description}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }

  getName() {
    let newFullName = `${this.firstName} ${this.lastName}`
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ');
    return newFullName;
  }
}

module.exports = UserModel;
