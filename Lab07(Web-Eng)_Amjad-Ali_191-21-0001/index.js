const heading = 'Amjad Ali';
const para = 'Khan';

const final = `${heading} is ${para} by caste`;

const obj = {name: 'Amjad', GPA:"3.6"}

const arr = [1,2,1,1,1,1,2,3,5,42,53,235];

const frequency = {}

arr.forEach(element => {

    if(frequency[element])
        frequency[element] = frequency[element] + 1;
    else{
        frequency[element] = 1;   
    }

});

console.log(frequency)

const person = {
    name : 'Amjad',
    age : '100',
    gender : 'male',
    country_code : 'GE'
}

const{} = person







