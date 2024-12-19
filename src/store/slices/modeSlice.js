import { createSlice } from "@reduxjs/toolkit";

export const Mode = createSlice({
  name: "mode",
  initialState: {
    mode: localStorage.getItem("mode") || "light-theme",
  },
  reducers: {
    changemode: (state) => {
      state.mode = state.mode === "light-theme" ? "dark-theme" : "light-theme";
      localStorage.setItem("mode", state.mode);
    },
  },
});

export const { changemode } = Mode.actions;
export default Mode.reducer;
