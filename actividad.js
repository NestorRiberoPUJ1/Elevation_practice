console.log(hello);     //Imprime variable hello              
var hello = 'world';    //Asigna valor a variable hello
//salida undefined    


var needle = 'haystack';    //Asgina valor a variable needle
test();                     //llama función test
function test() {           //Creacion funcion test
    var needle = 'magnet';  //Variable local needle    
    console.log(needle);    //Imprime variable needle
}
//salida magnet


var brendan = 'super cool'; //Asigna valor a variable brendan
function print() {          //Crea funcion print
    brendan = 'only okay';  //Reasgina valor a brendan
    console.log(brendan);   //Imprime variable brendan
}
console.log(brendan);       //Imprime variable brendan
//Salida super cool

var food = 'chicken';       //Asigna valor a variable food
console.log(food);          //Imprime variable food
eat();                      //LLama funcion eat
function eat() {            //Creación funcion eat
    food = 'half-chicken';  //Reasigna valor a food
    console.log(food);      //Imprime variable food
    var food = 'gone';      //Crea variable local food con valor gone
}
//Salida chicken ,  half chicken


/*
mean();                     //Llama funcion mean
console.log(food);          //imprime variable food
var mean = function () {    //Crea funcion mean
    food = "chicken";       //Asigna valor chicken a food
    console.log(food);      //Imprime food
    var food = "fish";      //Variable local food con valor fish
    console.log(food);      //Imprime variable local food
}
console.log(food);          //Imprime variable global food
//Salida chicken, fish chicken,chiken
*/

console.log(genre);         //imprime undefined
var genre = "disco";        //Asigna valor a genre
rewind();                   //Llama funcion rewind
function rewind() {         //Crea funcion rewind
    genre = "rock";         //Asigna valor a genre
    console.log(genre);     //Imprime genre
    var genre = "r&b";      //Variable local genre asigna valor
    console.log(genre);     //Imprime variable local genre
}
console.log(genre);         //Imprime variable genre
//Salida undefined, rock,r&b,disco


dojo = "san jose";      //Variable dojo asigna valor
console.log(dojo);      //Imprime dojo
learn();                //LLama funcion learn
function learn() {      //Crea funcion  
    dojo = "seattle";   //Asigna valor a dojo
    console.log(dojo);  //imprime dojo
    var dojo = "burbank";   //Variable local dojo
    console.log(dojo);      //imprime variable local
}
console.log(dojo);          //imprime dojo
//Salida san jose, seattlem,burbank, san jose


console.log(makeDojo("Chicago", 65));   //imprime resultado funcion makedojo
console.log(makeDojo("Berkeley", 0));   //imprime resultado funcion makedojo
function makeDojo(name, students) {     //crea funcion makeDOjo
    const dojo = {};                    //Crae dict
    dojo.name = name;                   //Asigna atributo nombre
    dojo.students = students;           //Asigna atributo studens
    if (dojo.students > 50) {           //Condicional estudiantes mayor a 50
        dojo.hiring = true;             //Crea atributo hiring con valor true
    }   
    else if (dojo.students <= 0) {      //Condicional estudiantes =0 o menor
        dojo = "closed for now";        //Cambia dojo a string 
    }
    return dojo;                        //retorna dojo
}
//Salida {name:Chicago , students: 65, hiring:true} , error cambia tipo de variable const