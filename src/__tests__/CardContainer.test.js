import CardContainer from "../Components/Card/CardContainer";
import { render, screen } from "@testing-library/react";

describe("CardContainer", () => {

    const mockData = [
        {
        title: "The Rock",
        src: "American Samoa",
        description: "The People's Elbow",
        index: 0,
        ups: 83,
        permalink: "BrahmaBull",
        url: "www.knowyourrole.com"
        },
        {
        title: "Stone Cold",
        src: "The Trailer Park",
        description: "The Stone Cold Stunner",
        index: 1,
        ups: 316,
        permalink: "StoneCold",
        url: "www.bottomline.com"
        }
    ]

    test("renders properly", () => {
    
        render(<CardContainer listings={mockData} filteredTerm={""}/>)
        
        const mockArray = screen.getAllByTestId("card");
        expect(mockArray).toHaveLength(2);
    })
})