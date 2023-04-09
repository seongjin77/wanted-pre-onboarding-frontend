import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Sign from "./pages/sign/Sign";
import Todo from "./pages/todo/Todo";
import { PrivateRoute, PublicRoute } from "./router/Router";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: ["Jua", "sans-serif"].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/todo" />} />
                    <Route
                        path="/todo"
                        element={
                            <PrivateRoute>
                                <Todo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <PublicRoute>
                                <Sign />
                            </PublicRoute>
                        }
                    />
                    <Route path="/signup" element={<Sign />} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
