/*
 * @Author: your name
 * @Date: 2022-03-21 13:56:51
 * @LastEditTime: 2022-03-21 16:41:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /go-movies/src/App.js
 */
import logo from "./logo.svg";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Categories from "./components/Categories";
import { useParams } from 'react-router-dom';
import OneMovie from './components/OneMovie'
// import { useParams,useMatch } from "@reach/router";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/movies/:id" element={<OneMovie />} />
              <Route path="/movies" element={<Movies />} />
              <Route exact path="/by-category" element={<CategoryPage />} />
              <Route
                exact
                path="/by-category/:title"
                element={<Categories/>}
              />
              <Route path="/admin" element={<Admin />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();
  return <h2>Movie id: {id}</h2>;
}

function CategoryPage() {
  // let match = useMatch("/by-category");
  // console.log(match);
  return (
    <div>
      <h2>Categories</h2>

      <ul>
        <li>
          <Link to={"/by-category/comedy"}>Comedy</Link>
        </li>
        <li>
          <Link to={"/by-category/drama"}>Drama</Link>
        </li>
      </ul>
    </div>
  );
}
// function Home(){
//   return <h2>Home</h2>
// }

// function Movies(){
//   return <h2>Movies</h2>
// }

// function Admin(){
//   return <h2>Manage Catalogue</h2>
// }
