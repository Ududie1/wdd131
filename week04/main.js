const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrroooooooooo";

    }
};
const car = Object.create(vehicle);
car.doors = 3;
car.engine = function (){
    return "Whooooosh";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
tesla.doors = 5;
tesla.engine = function () {
    return "shhhhhhhh";

};
console.log(tesla.engine());
console.log(tesla.doors);






//console.log(Object.values(band));

//for (let job in band) {
   // console.log(`On ${job}, it's ${band[job]}!`); // Use backticks for template literals
//}





//const band = {
   // vocals: "Robert Plant",
   // guitar: "Jimmy Page",
   // bass: "John Paul Jones",
   // drums: "John Bonham",
//};

//function sings({ vocals }) {
    //return { vocals }; // Return an object with the 'vocals' property
//}

//console.log(sings(band));//

let testArray = ['Techwithpri',100,true,2000-1000];
console.log(testArray[1100]);

let phoneCompany = ['samsung','apple','vivo','oneplus','long'];
console.log(phoneCompany[0]);
console.log(phoneCompany.length);
console.log(phoneCompany.toString());
let removeElements = (phoneCompany.pop());
console.log(removeElements);
phoneCompany.shift();
console.log(phoneCompany);
phoneCompany.unshift('Tecno');
console.log(phoneCompany);

phoneCompany.push('Appo');
console.log(phoneCompany);


function calculateAge(birthyear) {
    return 2023 - birthyear;
}

function storeAge() {
    let adult = [];
    let birthYear = [1992, 1995, 2007, 2006, 2005]; // Fixed assignment operator

    for (let i = 0; i < birthYear.length; i++) { 
        let age = calculateAge(birthYear[i]);
        console.log(age);

        if (age >= 18) { // Check if the person is an adult
            adult.push(age); // Add to adult array
        }
    }

    return adult; // Return array of adult ages
}

console.log(storeAge());






