import reducer from "reducers/loading";
import { SET_LOADING, REMOVE_LOADING } from "actions/loading";

describe("loading reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false
    });
  });

  it("should handle SET_LOADING", () => {
    expect(
      reducer(
        { isLoading: false },
        {
          type: SET_LOADING,
          isLoading: true
        }
      )
    ).toEqual({
      isLoading: true
    });
  });

  it("should handle REMOVE_LOADING", () => {
    expect(
      reducer(
        { isLoading: true },
        {
          type: REMOVE_LOADING,
          isLoading: false
        }
      )
    ).toEqual({
      isLoading: false
    });
  });
});
