const uuidv4 = require('uuid/v4');

class Employee {
  constructor(name, title, email) {
    this.id = uuidv4();
    this.name = name;
    this.title = title;
    this.email = email;
  }

  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getTitle() {
    return this.title;
  }
  get getRole() {
    return this.constructor.name;
  }
}

let r = new Employee('james', "dr", 'atyahoo')
console.log(r);


class Manager extends Employee {
  constructor(id, name, title, email, officeNumber) {
    super(id, name, title, email);
    this.officeNumber = officeNumber;
  }
}

class Engineer extends Employee {
  constructor(id, name, title, email, githubUserName) {
    super(id, name, title, email);
    this.githubUserName = githubUserName;
  }

  get getGithub() {
    return this.githubUserName;
  }
}

class Intern extends Employee {
  constructor(id, name, title, school) {
    super(id, name, title, email);
    this.school = school;
  }

  get getSchool() {
    return this.school;
  }
}