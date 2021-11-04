import React from 'react';

/*
1. 구조분해 할당
props 
HelloChild(props) == HelloChild({name}) 구조분해할당해서 사용할 수 있다.

2. Default Props
특정값을 빠뜨렸을 때 기본값을 설정해줄수 있다.

*/

function HelloChild({name,color}){
    return (
        <>
        <div style={{color}}>
            {name};
        </div>
        </>


    )
}

HelloChild.defaultProps={
    name : "이름없음"
}
export default HelloChild;