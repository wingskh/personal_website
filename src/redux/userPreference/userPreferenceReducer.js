import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  CHANGE_PAGE,
} from "./userPreferenceActions";

const defaultState = {
  language: "en",
  themeMode: "light",
  page: "About",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
