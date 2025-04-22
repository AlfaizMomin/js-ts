export {}  // 👈 Makes this a module, avoids TS2393

var userName: string = "Alice"  // ⚠️ Missing semicolon

function greetUser(name: string): void;
function greetUser(name: number): void;
function greetUser(name: any): void {
    console.log("Hello, " + name)  // ⚠️ console.log in production
    var unusedVar: number = 42     // ⚠️ Unused variable

    if (name == "Admin") {         // ⚠️ Should use ===
        console.log("Welcome Admin")
    }
}

greetUser(userName)
greetUser(123)
