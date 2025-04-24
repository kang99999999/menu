import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../css/Menu.css';

function Menu(){

    // 버튼을 눌렀을때 상태값 변경하기 위한 기본 세팅, 기본값은 K(한식)
    const [category, setCategory] = useState('K');

    // 버튼 누르면 배경 변경 -> 카테고리 값에 따라서 배경 이미지 링크 변경
    const changeBackground = () =>{
        switch(category){
            case 'K': return 'url("/images/korean.png")';
            case 'C': return 'url("/images/chinese.png")';
            case 'J': return 'url("/images/japanese.png")';
            case 'Y': return 'url("/images/western.png")';
            case 'D': return 'url("/images/drink.png")';
            default: return '';
        }
    }
    
    //버튼 이미지 세팅용 -> 배열로 만들어서 버튼을 반복하여 출력
    const btnCategories = [
        { code: 'K', defaultImg: '/images/btn/kBtn.png', pickImg: '/images/btn/kBtnPick.png' },
        { code: 'C', defaultImg: '/images/btn/cBtn.png', pickImg: '/images/btn/cBtnPick.png' },
        { code: 'J', defaultImg: '/images/btn/jBtn.png', pickImg: '/images/btn/jBtnPick.png' },
        { code: 'Y', defaultImg: '/images/btn/yBtn.png', pickImg: '/images/btn/yBtnPick.png' },
        { code: 'D', defaultImg: '/images/btn/dBtn.png', pickImg: '/images/btn/dBtnPick.png' }
    ];

    // 메뉴리스트 비동기 통신, 저장된 메뉴를 배열로 저장하기 위한 세팅
    const [menuList, setMenuList] = useState([]);

    // 실제로 DB에서 데이터를 받아오는 로직s
    useEffect(() => {
        axios.get(`/api/Menu/Load?category=${category}`)
          .then(res => {
            setMenuList(res.data);
          })
          .catch(err => {
            console.error(err);
          });
      }, [category]);

    return(
        // 전체 배경 세팅
        <div 
            className="menus" 
            style={{
                width: '1200px', height: '800px',
                backgroundImage: changeBackground(),
                backgroundSize: '1200px',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* 버튼을 배열로 만들어서 출력하기 */}
            {btnCategories.map((item)=>(
                <button
                    alt="버튼"
                    className="btn"
                    key={item.code}
                    // 클릭 시 카테고리값을 코드값으로 저장장
                    onClick={()=>setCategory(item.code)}
                    style={{
                    //삼항연산자를 통해 아이템 코드와 현재 카테고리 값을 비교, 배경이미지 변경
                    backgroundImage: category === item.code
                    ? `url("${item.pickImg}")`
                    : `url("${item.defaultImg}")`,
                    width: '130px', height: '70px',                   
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '0', marginLeft:'52px',
                    marginTop:'15px', cursor: 'pointer',
                    borderRadius:'13px', border:'none'
                    }}
                />
            ))}
            {/* 메뉴를 불러와와 카드형식으로 만들어서 출력하기 */}
            <div>
               {menuList.map((menu)=>(
                <div key={menu.mId}>
                    <img src={menu.mPhoto} alt="메뉴"/>
                    <h3>{menu.mName}</h3>
                    <p>{menu.mIntroduce}</p>
                    <p>소요시간: {menu.mTime}분</p>
                    <p>가능여부: {menu.mPossible ==='Y' ? '가능' : '불가'}</p>
                </div>
               ))}
            </div>
            <h1 className="neon" > SOON'S KITCHEN</h1>
        </div>
    )
}

export default Menu;