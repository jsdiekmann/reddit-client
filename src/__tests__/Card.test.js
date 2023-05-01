import Card, {Link} from "../Components/Card/Card";
import { screen, render } from "@testing-library/react";

describe("Card", () => {
  const cardData = {
    title: "The Smackdown Hotel",
    src: "wwww.thug.com/image.jpg",
    description: "At the corner of Jabroni Drive and Know Your Role Boulevard",
    index: 0,
    ups: 919,
    permalink: "www.smackdownhotel.gov",
    url: "www.thug.com"
  };

  test("renders with props correctly", () => {
    render(
      <Card
        title={cardData.title}
        src={cardData.src}
        description={cardData.description}
        index={cardData.index}
        ups={cardData.ups}
        permalink={cardData.permalink}
      />
    );

    const title = screen.getByText("The Smackdown Hotel");
    const src = screen.getByRole("img");
    const description = screen.getByText(
      "At the corner of Jabroni Drive and Know Your Role Boulevard"
    );
    const ups = screen.getByText("Ups: 919");
    const permalink = screen.getByRole("link", { name: cardData.title });

    expect(title).toBeVisible();
    expect(src).toBeVisible();
    expect(description).toBeVisible();
    expect(ups).toBeVisible();
    expect(permalink).toHaveAttribute(
      "href",
      `https://www.reddit.com${cardData.permalink}`
    );
  });

  test("renders Link component correctly", () => {
    render(<Link url={cardData.url} />);

    const url = screen.getByRole("link", {name: "External Link"});

    expect(url).toHaveAttribute("href", "www.thug.com");
  });

  test("does not render when no url", () => {
    render(<Link url={null} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  })
});

screen.debug();
