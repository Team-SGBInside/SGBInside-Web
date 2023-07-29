import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TestData from './components/TestData';

const Test = () => {
  const [greens, setGreens] = useState([]);

  useEffect(()=> {
    axios.get('http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=dd9125011e548bb9ba986fc83305a811&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ')
    .then(response => {
      setGreens(response.data.dataSearch.content);
      console.log(response.data.dataSearch.content);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

    console.log('greens: ', greens); //greens에 잘 담김
    console.log(typeof(greens));

  return (
    <div>
      <h1>출력내용</h1>
        <ul>
          {greens && greens.map(green => {
          <li key={green.lClass}>
            <p>{green.lClass}</p>
          </li>
           })}
        </ul>
    </div>
  );
};

export default Test;




// import React from 'react';
// // import { Request, Response } from "express";
// // 저는 nodejs를 위해 express를 쓰는데 어떤 함수 호출 시에 파라미터로 전달되는 res, req 변수를 이런 식으로 express에서 끌어옵니다
// import axios from "axios";

// //* async-await 문 주의사항:
// // async 후 await 없이 api 호출 혹은 DB에 접근해서
// // response를 콘솔에 찍어보면 잘 안 나오는 경우가 있음

// function Test() {
    
// // 어떤 버튼 클릭 혹은 페이지 액션을 취할 때 실행될 함수 "handleInfo"
// const handleInfo = async () => {
//     console.log("clicked");
//     // ***1. svcCode: MAJOR -> 학과코드를 얻는다
//     try {
//     const response = await axios.get(
//         `http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=dd9125011e548bb9ba986fc83305a811&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//     );
//     // 커리어넷 학과정보 api 호출 결과 안의 data 안의 dataSearch(커리어넷 api 최상위노드)에 접근 
//     const data = response.data.dataSearch;
//     console.log(data);
  
//     // dataSearch 안에서 학과코드를 받아와야 하는데...
  
//     // 학과코드들을 담아줄 빈 배열 선언
//     let majorSeqArray = [];
  
//     // 학과정보 api 호출 결과는 content라는 거대한 배열 안에 여러 개의 객체가 담겨 있다.
  
//     for (let i = 0; i < data.content.length; i++) {
//       // 따라서 content라는 배열의 길이만큼 for문을 돌려서,
//       const majorSeq = data.content[i].majorSeq; // content라는 배열을 인덱스로 접근해 각 배열마다 majorSeq 필드의 값을 가져오자
//       majorSeqArray.push(majorSeq); // 그리고 그 값을 비어있던 배열에 채워주자. 나중에 우리가 쓰기 편하게.
//     }
//     //console.log(majorSeqArray); // for loop가 끝나고 나면 majorSeqArray에는 학과코드들이 전부 담긴다.
  
//     // Q. 나중에 ["숫자", "숫자", ... "숫자"] 이런 식의 학과코드 배열은 어떻게 사용하나요?
//     // -> 마찬가지로 map 함수 또는 for문으로 배열의 인덱스에 접근할 수 있습니다!~
//     console.log(response);
//   } catch(error){
//     console.log(error);
//   }
// }
      
//     // *** 2. svcCode: MAJOR_VIEW -> 우리에게 정말 필요한 학과별 상세정보를 얻는다
//     // 중어중문학부 -> 10006번학과 코드 -> 학과코드에 맞게 api url을 호출.....
//     // 이런 식으로 학과 또는 계열에 따른 학과코드로의 연결고리를 만들고, 경우에 따라 다른 api url이 호출될 수 있도록 한다
//     return (
//         <div>
//             <h1> TEST PAGE입니다! </h1>
//             <button onClick={handleInfo}>Info Get Button</button>
//         </div>
//     );
// };

// export default Test;


