function tien() {
    let a = +document.getElementById('dien').value;
    let sum;

    if (a > 0 && a < 50) {
        sum = a * 1600;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 1<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    } else if (a <= 100) {
        sum = 50 * 1600 + (a - 50) * 1700;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 2<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    } else if (a <= 200) {
        sum = 50 * 1600 + 50 * 1700 + (a - 100) * 2000;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 3<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    } else if (a <= 300) {
        sum = 50 * 1600 + 50 * 1700 + 100 * 2000 + (a - 200) * 2500;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 4<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    } else if (a <= 400) {
        sum = 50 * 1600 + 50 * 1700 + 100 * 2000 + 100 * 2500 + (a - 300) * 2800;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 5<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    } else {
        sum = 50 * 1600 + 50 * 1700 + 100 * 2000 + 100 * 2500 + 100 * 2800 + (a - 400) * 2900;
        document.getElementById('in').innerHTML = "Bạn đang ở bậc 6<br> Số tiền phải trả cho " + a + ' là ' + sum + "VNĐ";
    }
}