/*
 * @Author: your name
 * @Date: 2022-03-21 16:33:32
 * @LastEditTime: 2022-03-21 16:55:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /go-movies/src/components/OneMovie.js
 */
import React, { Componet } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function OneMovie() {
  const { id } = useParams();
  const [movie,setMovie] = useState({
    id: id,
    title: "Some Movie",
    runtime: 150,
  });
  return (
    <div>
      <h2>Movies :{movie.title}</h2>
      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>c
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Run Time:</strong>
            </td>
            <td>{movie.runtime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
