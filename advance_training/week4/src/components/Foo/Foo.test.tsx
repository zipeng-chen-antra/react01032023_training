//jest is our test runner, it provides
//describe, test, expect, toBe, blahblah

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Foo from "./Foo"

//react-testing-library provides us utility
//functions to test our react components


//write our test cases to mimic actual users behavior
//not how our the logic in component is implemented
describe("Foo", () => {
    test("should render", () => {
        render(<Foo />)
        const element = screen.getByText("FOO");
        expect(element).toBeInTheDocument();
    })

    test("should not contain oiqwjhoqbuwiwq", () => {
        const { queryByText } = render(<Foo />);
        expect(queryByText("oiqwjhoqbuwiwq")).not.toBeInTheDocument();
    })

    test("should invoke the function passed from prop on button click",()=>{
        const handleClick = jest.fn();

        render(<Foo handleClick={handleClick}/>)
        const btn = screen.getByRole("button");
        expect(handleClick).toHaveBeenCalledTimes(0);
        userEvent.click(btn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})