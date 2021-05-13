import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import RegisterCourses from "./components/RegisterCourses";
import UserInfor from "./components/UserInfor";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={RegisterCourses} />
        <Route exact path="/user" component={UserInfor} />
      </Switch>
    </div>
  );
}

export default App;
