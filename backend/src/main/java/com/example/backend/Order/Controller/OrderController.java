package com.example.backend.Order.Controller;

import com.example.backend.Order.Service.OrderService;
import com.example.backend.Order.VO.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/Order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/save")
    public void saveOrder(
        @RequestBody List<OrderVO> orderList){
        System.out.println("주문내용:"+orderList);
        orderService.orderMenu(orderList);
    }

    @GetMapping("/loadOrder")
    public List<OrderVO> loadTodayMenu(){
        return orderService.loadTodayMenus();
    }
}
