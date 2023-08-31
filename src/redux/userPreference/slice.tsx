import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserPreferenceState {
  language: string;
  themeMode: string;
  page: string;
  isSideBarOpened: boolean;
}

const initialState: UserPreferenceState = {
  language: "en",
  themeMode: "light",
  page: "Profile",
  isSideBarOpened: window.innerWidth >= 800 ? true : false,
};

export const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState,
  reducers: {
    changeLanguageActionCreator: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    changeThemeActionCreator: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
    changePageActionCreator: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    changeSideBarActionCreator: (state, action: PayloadAction<boolean>) => {
      console.log("changeSideBarActionCreator:", action);
      state.isSideBarOpened = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  changeLanguageActionCreator,
  changeThemeActionCreator,
  changePageActionCreator,
  changeSideBarActionCreator,
} = userPreferenceSlice.actions;
