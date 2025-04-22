var userName: string = "Alice"  // Missing semicolon

function greetUser1(name: string) {
    console.log("Hello, " + name)  // Console in production
    var unusedVar: number = 42     // Unused variable
    if (name == "Admin") {         // Should be ===
        console.log("Welcome back Admin")
    }
}

greetUser(userName)
