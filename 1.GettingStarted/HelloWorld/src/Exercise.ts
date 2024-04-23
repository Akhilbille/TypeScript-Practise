// class Logger{
//     constructor(
//         public fileName:string){}
    
//     write(message:string):void{
//     }

// }

// Exercise 2
class Person{
    constructor(public firstName: string,
        public lastName: string){}
    
    get fullName(){
        return this.firstName + this.lastName;
    }
}

// Exercise 3


class Employee extends Person{
    constructor(firstName:string,
        lastName:string,
        public salary:number
        ){
            super(firstName,lastName);
        }


}

interface Employee{
    name:string;
    salary: number;
    address:{
        street:string,
        city:string,
        zipCode:number
    };

}