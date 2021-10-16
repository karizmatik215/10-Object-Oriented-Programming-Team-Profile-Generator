const Employee = require("./Employee")

// @ponicode
describe("getName", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("George", 56784, "something@example.com")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getName()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getId", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("George", 987650, "something@example.com")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getId()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getEmail", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Edmond", 12345, "something.example.com")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getEmail()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRole", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Edmond", 12345, "user@host:300")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getRole()
        }
    
        expect(callFunction).not.toThrow()
    })
})
