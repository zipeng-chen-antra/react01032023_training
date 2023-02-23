import { multiply, sum } from "./meth";

describe("Addition works fine",()=>{
    test("for single digit numbers",()=>{
        expect(sum(1,1)).toBe(2);
        expect(sum(5,1)).toBe(6);
        expect(sum(2,3)).toBe(5);
        expect(sum(1,5)).toBe(6);
        expect(sum(6,1)).toBe(7);
    })
    
    test("with more than 2 arguments",()=>{
        expect(sum(5,5,1,2)).toBe(13)
        expect(sum(5,5,1,2)).toBe(13)
        expect(sum(5,5,1,2)).toBe(13)
        expect(sum(5,5,1,2)).toBe(13)
    })
})


describe("Multiplying works fine",()=>{
    test("for single digit numbers",()=>{
        expect(multiply(1,1)).toBe(1);
        expect(multiply(5,1)).toBe(5);
    })
    
    test("with more than 2 arguments",()=>{
        expect(multiply(5,5,1,2)).toBe(50)
    })
})
