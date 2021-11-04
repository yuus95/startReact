import React from 'react';
import './Hello.css';

/*
1. 태그는 꼭 닫혀있어야한다. (input) 과 같이 닫히는 태그가 없는 경우도 생성해야한다
<input></input>  == <input /> 같은의미 

2. 2개이상의 태그는 하나의 태그로 감싸줘야한다.
     fragment <><> 비어있는 이름 없는 태그 -> div 를 불필요하게 사용했을 경우  fragment를 사용하면 깔끔해진다.
     div

3. JSX 내부에서 자바스크립트 값을 보여주고 싶을 때는 중괄호{}를 사용하면 된다.

4. 스타일을 넣고 싶을 때는 객체를 만들어야 한다.

5. class 를 넣을 때는 <div className ={클레스명} >  이렇게 사용해야한다.

6. 주석을 달고싶을 때는 {/*이렇식으로 사용해야한다. * / }
*/

function Hello(){
    const name = '유신'
    const style = {
        backgroundColor:'black', //카멜케이스를 적용시켜야 가능
        color:'aqua',
        fontSize:24,
        padding:'1rem'
    };

    return <>
        <div>안녕하세요</div>
        <div style= {style}>{name}</div>
        <div className="grayBox">a</div>
        </>
}
export default Hello;