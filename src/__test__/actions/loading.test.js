import * as actions from "actions/loading";

describe("actions", () => {
  it("should create an action to show a loading spinner", () => {
    const expectedAction = {
      type: actions.SET_LOADING,
      isLoading: true
    };

    expect(actions.setLoading()).toEqual(expectedAction);
  });

  it("should create an action to remove a loading spinner", () => {
    const expectedAction = {
      type: actions.REMOVE_LOADING,
      isLoading: false
    };

    expect(actions.removeLoading()).toEqual(expectedAction);
  });
});
