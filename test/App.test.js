import "jsdom-global/register";
import React from "react";
import Enzyme from "enzyme";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import App from "../src/App";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../src/modules/Common/Navbar";
import GridInterface from "../src/modules/Common/GridInterface";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders a NavBar and GridInterface component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar)).to.have.lengthOf(1);
    expect(wrapper.find(GridInterface)).to.have.lengthOf(1);
  });

  it("calls componentDidMount", () => {
    sinon.spy(App.prototype, "componentDidMount");
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property("callCount", 1);
    App.prototype.componentDidMount.restore();
  });
});
