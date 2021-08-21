function Human(abilityToSpeak, go, weight, skinColor, name, surname) {
    this.abilityToSpeak = abilityToSpeak;
    this.go = go;
    this.weight = weight + ' kg';
    this.skinColor = skinColor;
    this.name = name;
    this.surname = surname;
};
Human.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name} ${this.surname}`);
}
Human.prototype.canGo = function () {
    console.log(' I can go');
}
Human.prototype.haveWeight = function () {
    console.log(` Weight: ${this.weight}`);
}

function Man(abilityToSpeak, go, weight, skinColor, name, surname) {
    Human.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    console.log(`I'm a man`);
};

function constructor(classChild, classParent) {
    classChild.prototype = Object.create(classParent.prototype);
    classChild.prototype.constructor = classChild;
}
constructor(Man, Human);

function Woman(abilityToSpeak, go, weight, skinColor, name, surname) {
    Human.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    console.log(`I'm a woman`);
};
constructor(Woman, Human)

function Librarian(abilityToSpeak, go, weight, skinColor, name, surname, communicationSkills, analyticalSkills, organizationalSkills) {
    Woman.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    this.communicationSkills = communicationSkills;
    this.analyticalSkills = analyticalSkills;
    this.organizationalSkills = organizationalSkills;
}
constructor(Librarian, Woman)
Librarian.prototype.provideAccesToInformation = function () {
    console.log('Librarian helps people find information');
}

function Nurse(abilityToSpeak, go, weight, skinColor, name, surname, clinicalSkills, interpersonalSkills, attentionToDetail) {
    Woman.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    this.clinicalSkills = clinicalSkills;
    this.interpersonalSkills = interpersonalSkills;
    this.attentionToDetail = attentionToDetail;
}
constructor(Nurse, Woman)
Nurse.prototype.documentingTreatments = function () {
    console.log(`Nurse documents the treatment and progress of her patients`);
}
Nurse.prototype.identifyProblems = function () {
    console.log('Nurse must be able to quikly identify the best way to stabilize patients and minimize pain');
}

function Hunter(abilityToSpeak, go, weight, skinColor, name, surname, abilityToShoot) {
    Man.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    this.abilityToShoot = abilityToShoot;
}
constructor(Hunter, Man);
Hunter.prototype.shoot = function () {
    console.log('Hunter can shoot an animal');
}

function Worker(abilityToSpeak, go, weight, skinColor, name, surname, company, position) {
    Man.call(this, abilityToSpeak, go, weight, skinColor, name, surname)
    this.company = company;
    this.position = position;
}
constructor(Worker, Man);
Worker.prototype.workInfo = function () {
    console.log(`company:${this.company}, position:${this.position}`);
}


