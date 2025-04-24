package com.example.backend.Menu.DAO;
import com.example.backend.Menu.VO.MenuVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuDAO {
    // 1. 전체 메뉴 불러오기
    List<MenuVO> loadMenu();

    // 2. 카테고리별 메뉴 불러오기
    List<MenuVO> loadMenuByCategory(String category);
}
