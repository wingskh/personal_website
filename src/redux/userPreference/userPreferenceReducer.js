import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  CHANGE_PAGE,
  CHANGE_SIDE_BAR,
} from "./userPreferenceActions";

const defaultState = {
  language: "en",
  themeMode: "light",
  page: "Profile",
  isSideBarOpened: window.innerWidth >= 800 ? true : false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_PAGE:
      return { ...state, page: action.payload };
    case CHANGE_SIDE_BAR:
      return { ...state, isSideBarOpened: action.payload };
    default:
      return state;
  }
};
