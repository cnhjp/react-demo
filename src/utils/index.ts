/**
 * 切换暗色模式
 * @param darkMode
 */
export const toggleDarkMode = (darkMode: boolean) => {
  const body = document.body;
  const html = document.documentElement;
  if (darkMode) {
    body.setAttribute("theme-mode", "dark");
    html.classList.add("dark");
  } else {
    body.removeAttribute("theme-mode");
    html.classList.remove("dark");
  }
};
