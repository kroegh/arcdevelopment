import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import LandingPage from "../components/LandingPage";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/speditor"
            component={() => <div>Er du speditør?</div>}
          />
          <Route exact path="/om" component={() => <div>Om os</div>} />
          <Route
            exact
            path="/kontakt"
            component={() => <div>Kontakt os</div>}
          />
          <Route exact path="/login" component={() => <div>Login</div>} />
          <Route exact path="/tilbud" component={() => <div>Få tilbud</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
