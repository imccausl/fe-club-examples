import { mount } from "enzyme";
import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";

import { UniversalHeader } from ".";

expect.extend(toHaveNoViolations);

describe("Universal Header", () => {
  it("should render the nav links and the collapsable list button", async () => {
    const wrapper = mount(<UniversalHeader />);
    expect(wrapper.find(".UniversalHeader--link").length).toEqual(2);
    expect(wrapper.find(".UniversalHeader--collapsablebutton").length).toEqual(
      2
    );
    expect(wrapper.find(".UniversalHeader--navlist").length).toEqual(0);
    const results = await axe(wrapper.getDOMNode(), {
      rules: { region: { enabled: false } },
    });

    expect(results).toHaveNoViolations();
  });

  it("should open the support nav list when the button is clicked", async () => {
    const wrapper = mount(<UniversalHeader />);
    wrapper.find(".UniversalHeader--collapsablebutton").at(0).simulate("click");
    expect(wrapper.find(".UniversalHeader--navlist").length).toEqual(1);
    const results = await axe(wrapper.getDOMNode(), {
      rules: { region: { enabled: false } },
    });

    expect(results).toHaveNoViolations();
  });
});
