import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";

import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewTodo from "./pages/NewTodo";
import TodoDetails from "./pages/TodoDetails";

import GlobalStyles from "./components/styles/Global";

//apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(0);
  const [jwt, setJwt] = useState("");
  const [seeOtherTodos, setSeeOtherTodos] = useState(false);

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setJwt={setJwt}
          setUser={setUser}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                loggedIn={loggedIn}
                jwt={jwt}
                user={user}
                seeOtherTodos={seeOtherTodos}
                setSeeOtherTodos={setSeeOtherTodos}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setLoggedIn={setLoggedIn}
                setJwt={setJwt}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setLoggedIn={setLoggedIn}
                setJwt={setJwt}
                setUser={setUser}
              />
            }
          />
          <Route path="/new-todo" element={<NewTodo user={user} jwt={jwt} />} />
          <Route path="/todo/:id" element={<TodoDetails jwt={jwt} />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
