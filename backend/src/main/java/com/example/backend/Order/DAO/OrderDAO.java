package com.example.backend.Order.DAO;

import com.example.backend.Order.VO.OrderVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderDAO {

//   1. 주문한 메뉴 저장하기
   void OrderMenu(List<OrderVO> list);

//   2. 주문한 메뉴 불러오기
   List<OrderVO> loadTodayOrders();
}
