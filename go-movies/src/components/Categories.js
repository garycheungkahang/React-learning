/*
 * @Author: your name
 * @Date: 2022-03-21 15:19:51
 * @LastEditTime: 2022-03-21 16:25:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /go-movies/src/components/Categories.js
 */
import { useParams } from 'react-router-dom';

export default function Categories() {
    // console.log(title)
  const { title } = useParams();
  return(
    <p>This is : {title}</p>
  );
}