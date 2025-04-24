package com.example.backend.Order.Service;

import com.example.backend.Order.DAO.OrderDAO;
import com.example.backend.Order.VO.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderDAO orderDAO;

    public void orderMenu(List<OrderVO> list){
        orderDAO.OrderMenu(list);
    }

    public List<OrderVO> loadTodayMenus(){
        return orderDAO.loadTodayOrders();
    }
}
