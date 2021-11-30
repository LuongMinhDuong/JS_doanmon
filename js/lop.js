class Lop{
    constructor(id,tenlop){
        this.__id = id;
        this.__tenlop = tenlop;
    }
    set id(value){
        this.__id = value
    }
    get id(){
        return this.__id
    }
    set tenlop(value){
        this.__tenlop = value
    }
    get tenlop(){
        return this.__tenlop
    }
}