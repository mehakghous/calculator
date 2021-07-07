
var input = document.getElementById("inputValue");
var input2 = document.getElementById("inputValue2");
var signs = ["%", "-", "+", "/", "*"]
function getBtn(number) {
    input.value += number;
    if (signs.includes(input.value.charAt(0))) {
        alert("please add some value before the operator!")
        input.value = ""
        return
    } else if (signs.includes(input.value.charAt(input.value.length - 1)) && signs.includes(input.value.charAt(input.value.length - 2))) {
        alert("please enter single operator")
        backspace()
        return
    } else if (signs.includes(input.value.charAt(input.value.length - 1))) {
        return
    }
    else {
        input2.value = eval(input.value);
    }
}
function operation(opera) {
    if (signs.includes(input.value.charAt(input.value.length-1))) {
        alert("invalid input!")
        return
    }
    input2.value = eval(input.value)
    input.value = input2.value
    input2.value = ''
}
function clearResult(value) {
    input.value = ""
    input2.value = ''
}
function backspace() {
    input.value = input.value.slice(0, -1);
    input2.value = input.value
}