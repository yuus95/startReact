import React from 'react';

/*
Children Props: 태그와 태그사이에 넣는 내용들을 Children이라고 한다.

*/

function Wrapper({children}){
    const style ={
        border: '2px solid black',
        padding: 16
    };

    return <div style = {style}>{children}</div>
}

export default Wrapper;