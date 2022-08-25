export const CHANGE_LANGUAGE = "change_language";
export const CHANGE_THEME = "change_theme";
export const CHANGE_PAGE = "change_page";

export const changeLanguageActionCreator = (languageCode) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};

export const changeThemeActionCreator = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

export const changePageActionCreator = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};
