class Person{
    constructor(fName, lName, doB, email, nid, occupation){
        this.fName = fName;
        this.lName = lName;
        this.doB = doB;
        this.email = email;
        this.nid = nid;
        this.occupation = occupation;
    }
}

let doctor = new Person('Jon', 'Doe', '06/23/2023', 'abc@gmail.com', 234342, 'Doctor');
console.log(doctor.doB);