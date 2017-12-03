
export const shortcut = hotkey => {
  // console.log("shorcut action", hotkey);
  return {
    type: hotkey,
  };
};

// export const appShortcut = hotkey => dispatch => dispatch(shortcut(hotkey));

export const appShortcut = hotkey => dispatch => (
    dispatch(shortcut(hotkey))
);
