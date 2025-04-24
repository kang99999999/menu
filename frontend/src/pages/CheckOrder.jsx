import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function CheckOrder(){

    // DB에서 주문된 내용을 담기
    const [getMenus, setMenus] = useState([]);


    // 주문정보 조회
    useEffect(()=>{
        axios.get(`api/Menu/Load?name=${nickName}`)
        .then(res=> {
            setMenus(res.data);
        })
        .catch(err=>{
            console.error(err);;
        });
    },[nickName]);

    return(
        <div>
        <h1>주문내역 확인</h1>
        {getMenus.map((menu)=>(
            <div key={menu.mId} className="checkMenu">
                <span className="menus">{menu.m</span>
                <span className="menus"></span>
                
            </div>
        ))}
        </div>
    );
}

{menuList.map((menu)=>(
    <div key={menu.mId}>
        <img src={menu.mPhoto} alt="메뉴"/>
        <h3>{menu.mName}</h3>
        <p>{menu.mIntroduce}</p>
        <p>소요시간: {menu.mTime}분</p>
        <p>가능여부: {menu.mPossible ==='Y' ? '가능' : '불가'}</p>
    </div>
   ))}