var name = "Alice"  // Missing semicolon

function greetUser(name) {
    console.log("Hello, " + name)  // Console in production
    var unusedVar = 42;            // Unused variable
    if (name == "Admin") {         // Should be ===
        console.log("Welcome back Admin")
    }
}

greetUser(name)
