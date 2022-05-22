import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  const { user } = useContext(AuthContext);
  console.log("user",user)
  const HomeHere=()=>{
    return(
        <BrowserRouter>
        <Topbar />
        <div className="container">
      <Sidebar />
      <Route exact path="/"    component={Home}/>
      <Route exact path="/users"    component={UserList}/>
      <Route path="/user/:userId">
        <User />
      </Route>
      <Route path="/newUser">
        <NewUser />
      </Route>
      <Route path="/movies">
        <MovieList />
      </Route>
      <Route path="/movie/:movieId">
        <Movie />
      </Route>
      <Route path="/newMovie">
        <NewMovie />
      </Route>
      <Route path="/lists">
        <ListList />
      </Route>
      <Route path="/list/:listId">
        <List />
      </Route>
      <Route path="/newlist">
        <NewList />
      </Route>
    </div>
        </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Switch>
        { !user ? <>
          <Route path="/login" exact component={Login} />

        </>:
            <>
              <Route path="/" exact component={HomeHere} />

            </>}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
