import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/login/Login";
import Sign from "./pages/sign/Sign";
import Todo from "./pages/todo/Todo";

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
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Sign />} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
