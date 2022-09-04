import styled, { ThemeProvider } from "styled-components"
import Menu from './components/Menu';
import { Navbar } from "./components/Navbar";
import Home from "../src/pages/Home";
import Video from "../src/pages/Video";
import React from 'react';
import { useState } from 'react'
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const Container = styled.div`
  display: flex;  
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg}
`;
const Wrapper = styled.div`
  padding: 22px 30px
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
      <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main>
          <Navbar/>
          <Wrapper>
            <Routes path="/">
              <Route index element={<Home/>}/>
              <Route path="video">
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Routes>
          </Wrapper>
          </Main>
      </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;