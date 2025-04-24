import React, { useState } from "react";
import '../css/Home.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home(){

    // 버튼클릭 시 다른 페이지로 이동기능
    const navigate = useNavigate();

    const moveToMenu=()=>{
        if(!nickName){
            Swal.fire({
                text: '이름을 입력해주세요!',
                icon: 'warning',
                showConfirmButton: false,
                timer: 1500,
            })
            return;
        }
        localStorage.setItem('nickName', nickName); // 이 부분이 로컬스토리지를 통해서 다음 페이지에서도 이름을 가져감
        console.log("입장완료! 저장된 이름 : " + nickName);
        navigate("/Menu")   // 메뉴 페이지로 이동
    }

    // 이름 저장 기본 세팅
    const [nickName, setNickName] = useState('');

    return(
        <div style={{textAlign:"center"}} className="home">
            <input
                className="named"
                type="text"
                placeholder="이름을 입력하세요" 
                value={nickName} 
                onChange={(e)=>setNickName(e.target.value)}
            />
            <br/>
            <button onClick={moveToMenu} className="go">입장하기</button>
        </div>
    )
}

export default Home;