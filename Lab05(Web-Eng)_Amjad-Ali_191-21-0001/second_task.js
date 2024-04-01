
var car = {
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2024
};


function carInfo(carObject) {
    
    var brand = carObject.brand;
    var model = carObject.model;
    var year = carObject.year;
    
    
    var infoString = 'The ' + brand + ' ' + model + ' was manufactured in ' + year + '.';
    
    
    return infoString;
}


console.log(carInfo(car)); 
