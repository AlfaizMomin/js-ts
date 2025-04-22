// Duplicate function - defined twice
function greet(name) {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
    var unused = 123  // unused variable
}

// Another identical function (intentional duplication)
function greet(name) {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
    var unused = 123  // unused variable
}

// Duplicate logic across different functions
function greetAgain(name) {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
}

var message = "Hello"
var message = "World"  // Duplicate var declaration

function processList(items) {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i])
    }
}

greet("Alice")
greetAgain("Admin")
