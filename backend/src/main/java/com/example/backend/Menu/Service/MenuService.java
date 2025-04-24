package com.example.backend.Menu.Service;

import ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy;
import com.example.backend.Menu.DAO.MenuDAO;
import com.example.backend.Menu.VO.MenuVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuDAO menuDao;

    public List<MenuVO> loadAllMenus(){
        return menuDao.loadMenu();
    }

    public List<MenuVO> loadMenuByCategory(String category){
        return menuDao.loadMenuByCategory(category);
    }

}
