function validateForm() {
    var x;
    x = document.forms["frm_dk"]["txt_ho"].value;
    if (x == "") {
        alert("Bạn chưa nhập họ");
        return false;
    }
    x = document.getElementById("txt_ten").value;
    if (x == "") {
        alert("Bạn chưa nhập tên");
        return false;
    }
    x = document.getElementById("txt_dienthoai").value;
    if (isNaN(x) || x.length == 0 || x.length > 10) {
        alert("Điện thoại phải là số, mời nhập lại");
        return false;
    }
}