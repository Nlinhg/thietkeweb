var randomNumber = Math.floor(Math.random() * 10) + 1;
document.write(randomNumber + "</p>");
var KT = prompt("Nhập một số từ 1 đến 10");
while (KT != randomNumber) {
    KT = prompt("Số bạn nhập không đúng. Vui lòng nhập lại từ 1 đến 10");
}
document.write("Chúc mừng chúc mừng");