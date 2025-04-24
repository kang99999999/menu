package com.example.backend.Menu.Controller;

import com.example.backend.Menu.Service.MenuService;
import com.example.backend.Menu.VO.MenuVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/Menu")
public class MenuRestController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/Load")
    public List<MenuVO> menuLoadByCategory(
        @RequestParam("category") String category){
                System.out.println("카테고리:"+category);
                return menuService.loadMenuByCategory(category);
        }
}
