function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function detectSystemTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        applyTheme(newColorScheme);
    });

