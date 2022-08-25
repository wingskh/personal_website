import { createStore } from "redux";
import userPreferenceReducer from "./userPreference/userPreferenceReducer";

const store = createStore(userPreferenceReducer);

export default store;
