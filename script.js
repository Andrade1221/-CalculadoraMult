function calcMult() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let res = (Number(num1) * Number(num2));
    document.getElementsByName("resultado")[0].value = res;
}
