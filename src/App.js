import React, { Fragment } from 'react'
import { Routes ,Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page'
function App() {

  return (
      <Fragment>

          <Routes>
              <Route exact path={"/"} element={
                  <HomePage/>
              }/>
              <Route exact path={"/posts"} element={
                  <div>Posts</div>
              }/>
              <Route exact path={"/search"} element={
                  <div>Search</div>
              }/>
          </Routes>
      </Fragment>

  );
}

export default App;
