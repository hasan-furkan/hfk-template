import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...( {
            grey: {
                100: "#F8F9FA",
                200: "#E9ECEF",
                300: "#DEE2E6",
                400: "#CED4DA",
                500: "#ADB5BD",
                600: "#6C757D",
                700: "#495057",
                800: "#343A40",
                900: "#212529",
            },
            primary: {
                100: "#CFE2FF",
                200: "#9EC5FE",
                300: "#6EA8FE",
                400: "#3D8BFD",
                500: "#0D6EFD",
                600: "#0A58CA",
                700: "#084298",
                800: "#052C65",
                900: "#031633",
            },
            indigo: {
                100: "#E0CFFC",
                200: "#C29FFA",
                300: "#A370F7",
                400: "#8540f5",
                500: "#6610F2",
                600: "#520DC2",
                700: "#3D0A91",
                800: "#290661",
                900: "#140330",
            },
            purple: {
                100: "#E2D9F3",
                200: "#C5B3E6",
                300: "#A98EDA",
                400: "#8C68CD",
                500: "#6F42C1",
                600: "#59359A",
                700: "#432874",
                800: "#2C1A4D",
                900: "#160D27",
            },
            pink: {
                100: "#F7D6E6",
                200: "#EFADCE",
                300: "#E685B5",
                400: "#DE5C9D",
                500: "#D63384",
                600: "#AB296A",
                700: "#801F4F",
                800: "#561435",
                900: "#2B0A1A",
            },
            red: {
                100: "#F8D7DA",
                200: "#F1AEB5",
                300: "#EA868F",
                400: "#E35D6A",
                500: "#DC3545",
                600: "#B02A37",
                700: "#842029",
                800: "#58151C",
                900: "#2C0B0E",
            },
            orange: {
                100: "#FFE5D0",
                200: "#FECBA1",
                300: "#FEB272",
                400: "#FD9843",
                500: "#FD7E14",
                600: "#CA6510",
                700: "#984C0C",
                800: "#653208",
                900: "#331904",
            },
            yellow: {
                100: "#FFF3CD",
                200: "#FFE69C",
                300: "#FFDA6A",
                400: "#FFCD39",
                500: "#FFC107",
                600: "#CC9A06",
                700: "#997404",
                800: "#664D03",
                900: "#332701",
            },
            green: {
                100: "#D1E7DD",
                200: "#A3CFBB",
                300: "#75B798",
                400: "#479F76",
                500: "#198754",
                600: "#146c43",
                700: "#0F5132",
                800: "#0A3622",
                900: "#051B11",
            },
            teal: {
                100: "#D2F4EA",
                200: "#A6E9D5",
                300: "#79DFC1",
                400: "#4DD4AC",
                500: "#20C997",
                600: "#1AA179",
                700: "#13795B",
                800: "#0D503C",
                900: "#06281E",
            },
            cyan: {
                100: "#CFF4FC",
                200: "#9EEAF9",
                300: "#6EDFF6",
                400: "#3DD5F3",
                500: "#0DCAF0",
                600: "#0AA2C0",
                700: "#087990",
                800: "#055160",
                900: "#032830",
            },
            black: {
                500: "#000",
                300: "#28243D"
            },
            light: {
                500: "#FFF",
                300: "#F4F5FA"
            }
        })
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.purple[400],
                    },
                    success: {
                      main : colors.green[500]
                    },
                    danger: {
                        main : colors.red[500]
                    },
                    warning: {
                        main : colors.yellow[500]
                    },
                    info: {
                        main : colors.cyan[500]
                    },
                    light: {
                        main : colors.light[500]
                    },
                    dark: {
                        main : colors.black[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.black[300],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.purple[400],
                    },
                    success: {
                        main : colors.green[500]
                    },
                    danger: {
                        main : colors.red[500]
                    },
                    warning: {
                        main : colors.yellow[500]
                    },
                    info: {
                        main : colors.cyan[500]
                    },
                    light: {
                        main : colors.light[500]
                    },
                    dark: {
                        main : colors.black[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.light[300],
                    },
                }),
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
