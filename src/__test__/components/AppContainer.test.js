import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router-dom";

import * as authApi from "lib/authApi";

import AppWithData from "components/App/AppWithData";
import AuthenticatedApp from "components/App/AuthenticatedApp";

function setup() {
  const enzymeWrapper = shallow(<AuthenticatedApp />);

  return {
    enzymeWrapper
  };
}

describe("AuthenticatedApp component", () => {
  it("renders Redirect when user NOT autheticated", () => {
    authApi.isUserAuthenticated = jest.fn(() => false);
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(Redirect)).toHaveLength(1);
  });

  it("renders AppWithData when user autheticated", () => {
    authApi.isUserAuthenticated = jest.fn(() => true);
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(AppWithData)).toHaveLength(1);
  });
});
