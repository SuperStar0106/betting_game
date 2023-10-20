import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainPage } from "./pages";
import { PATH } from "./consts";
import { darkTheme } from "./styles";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.MAIN} element={<MainPage />}></Route>
            <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
