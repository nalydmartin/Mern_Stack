
// #1
console.log(hello);                                   
var hello = 'world';                                 

// interpreted as...
var hello; // var gets hoisted to top of scope.
console.log(hello);
hello = 'world'; // declaration remains in the same spot.

// predicted output:
// undefined

// #2 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// interpreted as...
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

// predicted outputs:
// 'magnet'

// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// interpreted as...
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// predicted outputs:
// 'super cool'

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// interpreted as...
var food;
function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
food = 'chicken';
console.log(food);
eat();

// predicted outputs:
// 'chicken'
//'half-chicken'

// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// interpreted as...
var mean;
mean();
console.log(food);
mean = function(){
    var food;
    food = 'chicken';
    console.log(food);
    food = 'fish';
    console.log(food);
}
console.log(food);

// predicted outputs:
// error

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


//interpreted as...
var genre;
function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// predicted outputs:
// undefined
// "rock"
// "r&b"
// "disco"

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// interpreted as...
function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// predicted outputs:
// "san jose"
// "seattle"
// "burbank"
// "san jose"

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// interpreted as...
// code order interpretation will not change, however, const dojo can not be reassigned a value after declaration. Thus and error will be thrown once line 184 is run.