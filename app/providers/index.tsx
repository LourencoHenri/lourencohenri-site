import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { useMemo, createContext, useState } from "react";

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
	colorMode: "dark",
});

const MuiProvider = ({ children }: { children: ReactNode }) => {
	const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

	const toggleColorMode = () => {
		setColorMode((prevColorMode) =>
			prevColorMode === "light" ? "dark" : "light"
		);
	};

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: colorMode,
					primary: {
						main: "#0072f5",
					},
					secondary: {
						main: "#212121",
					},
				},
			}),
		[colorMode]
	);

	return (
		<ColorModeContext.Provider value={{ toggleColorMode, colorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default MuiProvider;
