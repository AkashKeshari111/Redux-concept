import axios from "axios";
import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from "./Feeds.Type";

export const FeedsAction = () => async (dispatch) => {
  dispatch({ type: LOADING_FEEDS });

  await axios
    .get("http://localhost:8080/products")
    .then((res) => {
      dispatch({ type: SUCCESS_FEEDS, payload: res.data });
      return res.data
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR_FEEDS });
    });
};
