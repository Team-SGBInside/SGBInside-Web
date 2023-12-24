import React, { useState } from "react";
import blueform_bg from "./img/blueform_bg.png";
import blue_talk from "./img/blue_talk.png";
import "./BlueRecom.css";
import axios from "axios";
import { getCookie, setCookie } from "../../lib/cookie";
import link from "./img/external-link.png";

function BlueRecom() {
  const userId = getCookie("userId");
  const token = getCookie("accessToken");

  const [major, setMajor] = useState("");
  const [books, setBooks] = useState("");

  const handleMajor = (e) => {
    e.preventDefault();
    setMajor(e.target.value);
  };

  const onKeySubmitSearch = (e) => {
    if (e.key === "Enter") {
      axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
          withCredentials: true,
        },
        url: "http://13.209.110.66:3000/recommend/book",
        data: {
          major: major,
        },
      })
        .then((result) => {
          console.log("요청성공");
          console.log(result);
          const books = result.data.data;
          setBooks(books);
          if (books.length === 0) {
            alert(
              "해당 검색어으로 조회된 권장도서가 없습니다. \n 다른 학과명을 입력해보시겠어요?"
            );
          }
          const codes = JSON.stringify(books);
        })
        .catch((error) => {
          console.log("요청실패");
          console.log(error);
          window.alert("조회실패");
        });
    }
  };
  return (
    <div className="bluerecom">
      {/* <div className="bluerecom_bg"> */}
      {/* <img src={blueform_bg} alt="blueform_bg" width="1200" height="1510" /> */}
      <div className="bluerecom_content">
        <br />
        <div className="blue_talk">
          <img src={blue_talk} alt="blue_talk" width="555" height="130" />
        </div>
        <br />
        <br />
        {/* Search 관련 코드 */}
        <div className="search_div_blue">
          <input
            type="search"
            placeholder="검색어를 입력 하세요..."
            name="query"
            className="search_input_blue"
            onChange={handleMajor}
            onKeyPress={onKeySubmitSearch}
          />
        </div>
        <br />
        <div className="search_result_blue">
          <table>
            <thead>
              <tr>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;도서명&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;저자&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;출판사&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>
                  &nbsp;&nbsp;&nbsp;&nbsp;추천대학&nbsp;&nbsp;&nbsp;&nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => {
                  return (
                    <tr key={book.id}>
                      <td id="book-title">
                        <a
                          id="book-title-link"
                          href={book.purchaseLink}
                          target="_blank"
                        >
                          {book.도서명}
                          <img
                            id="book-title-link-img"
                            src={link}
                            alt="구매링크"
                          />
                        </a>
                      </td>
                      <td>{book.저자}</td>
                      <td>{book.출판사}</td>
                      <td>{book.추천인}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default BlueRecom;
