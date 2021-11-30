class Student{
    constructor(id, hoTen, maSV, lop, khoa, toan, ly, hoa, trangthai){
        this.__id = id;
        this.__hoTen= hoTen;
        this.__maSV= maSV;
        this.__lop= lop;
        this.__khoa= khoa;
        this.__toan= toan;
        this.__ly= ly;
        this.__hoa= hoa;
        this.__trangthai= trangthai;
    }
    set id(value) {this.__id = value;}
    get id() {return this.__id};

    set hoTen(value) {this.__hoTen = value;}
    get hoTen() {return this.__hoTen};
    
    set maSV(value) {this.__maSV = value;}
    get maSV() {return this.__maSV}
    
    set lop(value) {this.__lop = value;}
    get lop() {return this.__lop}
    
    set khoa(value) {this.__khoa = value;}
    get khoa() {return this.__khoa}
    
    set toan(value) {this.__toan = value;}
    get toan() {return this.__toan}
    
    set ly(value) {this.__ly = value;}
    get ly() {return this.__ly}
    
    set hoa(value) {this.__hoa = value;}
    get hoa() {return this.__hoa}
    
    set trangthai(value) {this.__trangthai = value;}
    get trangthai() {return this.__trangthai}
}