import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/login/Login";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: ["Jua", "sans-serif"].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Routes>
                    <Route
                        path="/signin"
                        element={
                                <Login />
                        }
                    />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
