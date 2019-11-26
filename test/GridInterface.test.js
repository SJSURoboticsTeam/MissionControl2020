import React from "react";
import Enzyme from "enzyme";
import { expect } from "chai";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GridInterface from "../src/modules/Common/GridInterface";
import ModuleContainer from "../src/modules/Common/ModuleContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("<GridInterface />", () => {
  it("renders four ModuleContainer components", () => {
    const wrapper = shallow(<GridInterface />);
    expect(wrapper.find(ModuleContainer)).to.have.lengthOf(4);
  });
});
