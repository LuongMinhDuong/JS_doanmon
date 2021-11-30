//Khởi tạo mảng
stdList = Array();
khoaList = Array();
lopList = Array();
//tạo giá trị
function create() {
    btn = document.getElementById("btnAdd");
    btn.addEventListener('click',addStd);
    
    rootDom = document.getElementById('display');
    hoTenDom = document.getElementById('nameStudent');
    idStudentDom = document.getElementById('idStudent');
    classStudentDom = document.getElementById('classStudent');
    departmentStudentDom = document.getElementById('departmentStudent');
    mathStudentDom = document.getElementById('mathStudent');
    physicStudentDom = document.getElementById('physicStudent');
    chemistryStudentDom = document.getElementById('chemistryStudent');
    
    inputDom = document.getElementById('input');
    editDom = document.getElementById('edit');
    hoTenEditDom = document.getElementById('nameEditStudent');
    idStudentEditDom = document.getElementById('idEditStudent');
    classStudentEditDom = document.getElementById('classEditStudent');
    departmentStudentEditDom = document.getElementById('departmentEditStudent');
    mathStudentEditDom = document.getElementById('mathEditStudent');
    physicStudentEditDom = document.getElementById('physicEditStudent');
    chemistryStudentEditDom = document.getElementById('chemistryEditStudent');
}
function render() {
    rootDom.innerHTML = '<tr><th>STT</th><th>Họ và tên</th><th>Mã sinh viên</th><th>Lớp</th><th>Khoa</th><th>Toán</th><th>Lý</th><th>Hoá</th><th>Trạng thái</th></tr>';
    stdList.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}

function renderSearch() {
    rootDom.innerHTML = '<tr><th>STT</th><th>Họ và tên</th><th>Mã sinh viên</th><th>Lớp</th><th>Khoa</th><th>Toán</th><th>Lý</th><th>Hoá</th><th>Trạng thái</th></tr>';
    arr.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}

function createNodeStudent(std) {
    nodeRow = document.createElement('tr');

    nodeSTT = document.createElement('td');
    nodeSTT.innerHTML = std.id;
    nodeRow.appendChild(nodeSTT);

    nodeHoten = document.createElement('td');
    nodeHoten.innerHTML = std.hoTen;
    nodeRow.appendChild(nodeHoten);
    
    nodeMaSinhVien = document.createElement('td');
    nodeMaSinhVien.innerHTML = std.maSV;
    nodeRow.appendChild(nodeMaSinhVien);

    nodeLop = document.createElement('td');
    nodeLop.innerHTML = std.lop;
    nodeRow.appendChild(nodeLop);

    nodeKhoa = document.createElement('td');
    nodeKhoa.innerHTML = std.khoa;
    nodeRow.appendChild(nodeKhoa);

    nodeToan = document.createElement('td');
    nodeToan.innerHTML = std.toan;
    nodeRow.appendChild(nodeToan);

    nodeLy = document.createElement('td');
    nodeLy.innerHTML = std.ly;
    nodeRow.appendChild(nodeLy);

    nodeHoa = document.createElement('td');
    nodeHoa.innerHTML = std.hoa;
    nodeRow.appendChild(nodeHoa);
   
    nodeStatus = document.createElement('td');
    nodeStatus.setAttribute('class','trangthai');
    nodeRow.appendChild(nodeStatus);

    // Khởi tạo edit
    nodeEdit = document.createElement('button');
    nodeEdit.innerHTML = 'Sửa';
    nodeEdit.addEventListener('click',function() {
        editStd(std.id);
    })
    nodeStatus.appendChild(nodeEdit);

    // Khởi tạo delete
    nodeDelete = document.createElement('button');
    nodeDelete.innerHTML = 'Xóa';
    nodeDelete.addEventListener("click", function () {
        deleteStd(std.id);
    })
    nodeStatus.appendChild(nodeDelete);

    return nodeRow;
}

//create Student
id = 0;
function addStd(){ 
    id++;
    std = new Student(
        id,
        hoTenDom.value,
        idStudentDom.value,
        classStudentDom.value,
        departmentStudentDom.value,
        mathStudentDom.value,
        physicStudentDom.value,
        chemistryStudentDom.value
    );
    console.log(std);
    stdList.push(std);
    render();
}

function deleteStd(id){
    i = 0;
    for(;i < stdList.length; i++){
        if(stdList[i].id == id) break;
    }
    stdList.splice(i, 1);
    render();
}

let index;
function editStd(id){
    inputDom.style.display = 'none';
    stdList.forEach(std => {
        if(std.id == id){
            hoTenEditDom.value = std.hoTen;
            idStudentEditDom.value = std.maSV;
            classStudentEditDom.value = std.lop;
            departmentStudentEditDom.value = std.khoa;
            mathStudentEditDom.value = std.toan;
            physicStudentEditDom.value = std.ly;
            chemistryStudentEditDom.value = std.hoa;
            editDom.style.display = 'block';
            index = id;
        }
    });
}

function updateStd() {
    editDom.style.display = 'none';
    inputDom.style.display = 'block';
    id = index;
    stdList.forEach(std => {
        if(std.id == id){
            std.hoTen = hoTenEditDom.value;
            std.maSV =  idStudentEditDom.value  ;
            std.lop = classStudentEditDom.value;
            std.khoa = departmentStudentEditDom.value;
            std.toan = mathStudentEditDom.value;
            std.ly = physicStudentEditDom.value;
            std.hoa = chemistryStudentEditDom.value;
        }
    });
    render();
}

function search() {
    arr = new Array();
    key = document.getElementById('search').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].hoTen.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}

function searchKhoa() {
    arr = new Array();
    key = document.getElementById('searchKhoa').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].khoa.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}

function searchLop() {
    arr = new Array();
    key = document.getElementById('searchLop').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].lop.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}

function addkhoa() {
    tenKhoaDom = document.getElementById('tenKhoa');
    i = khoaList.length + 1;
    a = new Khoa(i,tenKhoaDom.value);
    khoaList.push(a);
    truyenKhoa();
}

function truyenKhoa() {
    a = document.getElementById('departmentStudent');
    b = document.getElementById('departmentEditStudent');
    c = document.getElementById('searchKhoa');

    if(khoaList.length != 0){
        a.appendChild(createOptionK(khoaList[khoaList.length-1]));
        b.appendChild(createOptionK(khoaList[khoaList.length-1]));
        c.appendChild(createOptionK(khoaList[khoaList.length-1]));
    }
}

function createOptionK(k) {
    op = document.createElement('option');
    op.innerHTML = k.__tenkhoa;
    op.setAttribute("value",k.__tenkhoa);
    return op;
}

function addlop() {
    tenLopDom = document.getElementById('tenLop');
    j = lopList.length + 1;
    c = new Lop(j,tenLopDom.value);
    lopList.push(c);
    truyenLop();
}
function truyenLop() {
    c = document.getElementById('classStudent');
    d = document.getElementById('classEditStudent');
    e = document.getElementById('searchLop');
    if(lopList.length != 0){
        c.appendChild(createOptionL(lopList[lopList.length-1]));
        d.appendChild(createOptionL(lopList[lopList.length-1]));
        e.appendChild(createOptionL(lopList[lopList.length-1]));
    }
}
function createOptionL(g) {
    opt = document.createElement('option');
    opt.innerHTML = g.__tenlop;
    opt.setAttribute("value",g.__tenlop);
    return opt;
}

window.onload = function (e) {
    create();
    render();
}

