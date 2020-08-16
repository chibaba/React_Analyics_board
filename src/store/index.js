import { createStore } from "redux";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer);

store.subscribe(() => {
  console.log("store updated: ", store.getState());
});

export default store;
