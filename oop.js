class Person{
    // private variable
    #age;
    fullName;
    constructor(fName, lName, doB, email, nid, occupation){
        this.fName = fName;
        this.lName = lName;
        this.doB = doB;
        this.email = email;
        this.nid = nid;
        this.occupation = occupation;
    }
    get getfullName (){
        return `${this.fName} ${this.lName}`;
    }

    #getemail(){
        console.log(`Provided Email ${this.email}`);
    }
    // private function & it can be only accessed into the class
    #setAge(){
        let today = new Date();
        let dobDate = new Date(this.doB);
        let days = (today.getTime() - dobDate.getTime())/(1000 * 3600 * 24);
        let year = Math.floor(days / 365);
        let month = Math.floor((days % 365)/30);
        let day = Math.floor((days % 365)%30);
        this.age = `year: ${year} month: ${month} day: ${day}`;
    }
    get getAge(){
        this.#setAge();
        return `${this.fName}'s age is ${this.age}`;
    }
}

class Farmer extends Person{
    constructor(sex, fName, lName, doB, email, nid, occupation){
        super(fName, lName, doB, email, nid, occupation);
        this.sex = sex;
    }
    get getSex(){
        return `${this.getfullName}'s gender is ${this.sex}`;
    }
}

let doctor = new Farmer('Male', 'Jon', 'Doe', "10/25/1990", 'abc@gmail.com', 234342, 'Doctor');
console.log(doctor.getSex);