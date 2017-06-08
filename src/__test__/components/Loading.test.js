import React from "react";
import Loading from "components/core/Loading";
import { create } from "react-test-renderer";

describe("Loading component", () => {
  it("not loading, renders children", () => {
    const tree = create(
      <Loading loading={false}><div>Test</div></Loading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("laoding, hides content", () => {
    const tree = create(
      <Loading loading={true}><div>Test</div></Loading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("error, show error message", () => {
    const tree = create(
      <Loading loading={true} error={{ message: "Something's gone wrong." }}>
        <div>Test</div>
      </Loading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
