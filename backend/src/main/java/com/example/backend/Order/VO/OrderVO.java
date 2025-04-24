package com.example.backend.Order.VO;

import java.util.Date;

public class OrderVO {
    private int oId;
    private String oName;
    private int oAmount;
    private String oNickname;
    private Date oDate;

    public int getoId() {
        return oId;
    }

    public void setoId(int oId) {
        this.oId = oId;
    }

    public String getoName() {
        return oName;
    }

    public void setoName(String oName) {
        this.oName = oName;
    }

    public int getoAmount() {
        return oAmount;
    }

    public void setoAmount(int oAmount) {
        this.oAmount = oAmount;
    }

    public String getoNickname() {
        return oNickname;
    }

    public void setoNickname(String oNickname) {
        this.oNickname = oNickname;
    }

    public Date getoDate() {
        return oDate;
    }

    public void setoDate(Date oDate) {
        this.oDate = oDate;
    }

    @Override
    public String toString() {
        return "OrderVO{" +
                "oId=" + oId +
                ", oName='" + oName + '\'' +
                ", oAmount=" + oAmount +
                ", oNickname='" + oNickname + '\'' +
                ", oDate=" + oDate +
                '}';
    }
}

