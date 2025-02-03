import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const PasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      //  check if paste with same title exists
      if (paste.content === "" || paste.title === "") {
        toast.error("invalid paste", {
          style: { backgroundColor: "#0ea5e9" },
        });
      } else if (
        state.pastes.findIndex((item) => item.title === paste.title) >= 0
      ) {
        toast.error("paste with same title exists", {
          style: { backgroundColor: "#r0ea5e9" },
        });
      } else {
        if (state.pastes) state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("paste created successfully", {
          style: { backgroundColor: "#0ea5e9" },
        });
      }
    },

    updatePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste updated", {
          style: { backgroundColor: "#0ea5e9" },
        });
      }
    },
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        // remove 1 index from index
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste deleted", {
          style: { backgroundColor: "#0ea5e9" },
        });
      }
    },
    resetPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, deletePaste, resetPastes } =
  PasteSlice.actions;

// default export
export default PasteSlice.reducer;
