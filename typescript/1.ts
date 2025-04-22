export {}  // Makes the file a module (avoids global conflicts)

var userName: string = "Admin"  // ⚠️ var + missing semicolon

// Duplicate function implementation - same logic, declared twice
function greetUser(name: string): void {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
    var unusedValue: number = 99
}

function greetUser(name: string): void {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
    var unusedValue: number = 99
}

// Same logic, new function name
function greetUserAgain(name: string): void {
    console.log("Hello, " + name)
    if (name == "Admin") {
        console.log("Welcome Admin")
    }
}

// Common linter issues
var count: number = 5
var count: number = 10  // Duplicate declaration

function loopThrough(arr: string[]): void {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

greetUser(userName)
greetUserAgain("Alice")
