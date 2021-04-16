function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for 
that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
// for sort by make, lower ascii characters should be greater than higher ascii characters
if (comparator == makeComparator) {
var i, j;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length-1; j++) {
            if(comparator(array[j], array[j + 1])) {
                var temp;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

}

// else sort by largest object to smallest object
else {
    var i, j;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length-1; j++) {
            if(!comparator(array[j], array[j + 1])) {
                var temp;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than
 the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are "tied" according to the comparison rules then the order of those "tied" cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    return exComparator(auto1.year, auto2.year);
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are 
alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    return exComparator(auto1.make.toUpperCase(), auto2.make.toUpperCase());
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows:
 roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive.
  If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var auto1Type;
    switch(auto1.type.toLowerCase()) {
        case "roadster":  auto1Type = 5;
        break;
        case "pickup": auto1Type = 4;
        break;
        case "suv": auto1Type = 3;
        break;
        case "wagon": auto1Type = 2;
        break;
        default: auto1Type = 1; // this includes sedan as it is a type not otherwise listed
        break;
    }

    var auto2Type;
    switch(auto2.type.toLowerCase()) {
        case "roadster": auto2Type = 5;
        break;
        case "pickup": auto2Type = 4;
        break;
        case "suv": auto2Type = 3;
        break;
        case "wagon": auto2Type = 2;
        break;
        default: auto2Type = 1; // this includes sedan as it is a type not otherwise listed
        break;
    }


    // if the types are the same, sort by year, with the newest model year being greater
    if (auto1Type == auto2Type) {
        return exComparator(auto1.year, auto2.year);
    }


    return exComparator(auto1Type, auto2Type);
}

// print array function
function printArray(array) {
    var i;
    for (i = 0; i < array.length; i++) {
        console.log(array[i].year + " " + array[i].make + " " + array[i].model);
    }
}

console.log("*****");
console.log("The cars sorted by year are:");
sortArr(yearComparator, automobiles);
printArray(automobiles);
console.log("\nThe cars sorted by make are:");
sortArr(makeComparator, automobiles);
printArray(automobiles);
console.log("\nThe cars sorted by type are:");
sortArr(typeComparator, automobiles);
printArray(automobiles);
console.log("*****");