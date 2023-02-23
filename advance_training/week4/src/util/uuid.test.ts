import { v4 } from "./uuid"

describe("uuid",()=>{
    test("should return a string",()=>{
        expect(typeof v4()).toBe("string")
    })
})