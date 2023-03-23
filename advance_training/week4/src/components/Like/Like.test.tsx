import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Like, { LikeProps } from "./Like"

describe("Like button", () => {
    test("should render with default count of 100", () => {
        render(<Like />)
        const likeBtn = screen.getByText("Like | 100");
        expect(likeBtn.tagName).toBe("BUTTON");
        expect(likeBtn).not.toHaveStyle('color:blue');
    
        expect(likeBtn).toBeInTheDocument();
    })

    test("should render with prop of a customized like count", () => {
        const likeProps: LikeProps = {
            count: 10
        }

        render(<Like {...likeProps} />)

        const likeBtn = screen.getByText("Like | 10");
        expect(likeBtn).toBeInTheDocument();
    })

    test("should be liked after clicking once", () => {
        render(<Like />)
        const likeBtn = screen.getByRole("like-button");
        userEvent.click(likeBtn);
        expect(likeBtn).toHaveTextContent("Like | 101");
        expect(likeBtn).toHaveClass('btn-liked');
        
    })
    
    test("should be not liked after clicking twice", () => {
        render(<Like />)
        const likeBtn = screen.getByRole("like-button");
        userEvent.click(likeBtn);
        userEvent.click(likeBtn);
        expect(likeBtn).toHaveTextContent("Like | 100");
        expect(likeBtn).not.toHaveClass('btn-liked');
    })
})