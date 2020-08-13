import { createStore } from "redux";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store updated: ", store.getState());
});

export default store;
