import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"
import './App.css'
import AuthLogin from './views/pages/auth-forms/AuthLogin';
import Home from './views/pages/Home';
import theme from "../src/js/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="login" element={<AuthLogin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
