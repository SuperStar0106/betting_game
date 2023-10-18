import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainPage } from "./pages";
import { PATH } from "./consts";
import { darkTheme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
