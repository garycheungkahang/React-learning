/*
 * @Author: your name
 * @Date: 2022-03-21 14:26:37
 * @LastEditTime: 2022-03-21 16:28:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /go-movies/src/components/Movies.js
 */

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Movies extends Component {
  state = { movies: [] };

  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "The Shawshank Redemption", runtime: 142 },
        { id: 2, title: "The Godfather", runtime: 175 },
        { id: 3, title: "The Dark Knight", runtime: 153 },
      ],
    });
  }

  render() {
    return (
      <>
        <h2>Choose a movie</h2>
        <ul>
          {this.state.movies.map((m) => (
            <li key={m.id}>
               <Link to={`/movies/${m.id}`}>{m.title} {m.id}</Link> 
            </li>
          ))}
        </ul>
      </>
    );
  }
}
