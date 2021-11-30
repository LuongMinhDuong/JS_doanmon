class Khoa{
    constructor(id,tenkhoa){
        this.__id = id;
        this.__tenkhoa = tenkhoa;
    }
        set id(value){
            this.__id = value
        }
        get id(){
            return this.__id
        }
        set tenkhoa(value){
            this.__tenkhoa = value
        }
        get tenkhoa(){
            return this.__tenkhoa
        }

}

