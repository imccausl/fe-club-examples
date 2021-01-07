import { mount } from "enzyme";
import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "./App";

expect.extend(toHaveNoViolations);

describe("Universal Header", () => {
  it("should render the header, body, and page", async () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(".Header").length).toEqual(1);
    expect(wrapper.find(".Body").length).toEqual(1);
    expect(wrapper.find(".Page").length).toEqual(1);

    const results = await axe(wrapper.getDOMNode(), {
      runOnly: ["region"],
    });

    expect(results).toHaveNoViolations();
  });
});
