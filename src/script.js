const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
};

/*window.onclick = event => {
    if (!event.target.matches(".dropdown__dropdownBtn")) {

        let dropdowns = document.getElementsByClassName("dropdown__dropdownContent");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}*/

const selectDropFunction = (value) => {
    document.getElementsByClassName("dropdown__dropdownInput")[0].value = value
}

const turnOffDisableMinus = (className) => {
    document.querySelectorAll(`.${className}`)[0].children[1].children[0].removeAttribute("disabled");
}

const turnOnDisableMinus = (className) => {
    document.querySelectorAll(`.${className}`)[0].children[1].children[0].setAttribute("disabled", "disabled");
}

const functionPlus = (className) => {
    document.getElementsByClassName(className)[0].children[1].children[1].innerText = Number(document.getElementsByClassName(className)[0].children[1].children[1].innerText) + 1
    turnOffDisableMinus(className)
}
const functionMinus = (className) => {
    document.getElementsByClassName(className)[0].children[1].children[1].innerText = Number(document.getElementsByClassName(className)[0].children[1].children[1].innerText) - 1
    if (document.getElementsByClassName(className)[0].children[1].children[1].innerText==="0"){
        turnOnDisableMinus(className)
    }
}

const clearValue = () => {
    document.querySelectorAll('.switcher__value').forEach(a => a.innerText = 0)
    document.getElementsByClassName(`dropdown__dropdownInput`)[0].defaultValue = "Сколько гостей"
    document.querySelectorAll(`.switcher__btnMinus`).forEach(a =>  a.setAttribute("disabled", "disabled"))
}

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 == 1) {
        return text_forms[0];
    }
    return text_forms[2];
}

const toApply = () => {
    let array = []
    document.querySelectorAll(".switcher__value").forEach(a => array.push(a.innerText))
    let arrayGuests = [Number(array[0]) + Number(array[1]), Number(array[2])]
    let textValueGuests = declOfNum(arrayGuests[0], ["гость", "гостя", "гостей"])
    let textValueToddlers = declOfNum(arrayGuests[1], ["младенец", "младенца", "младенцев"])
    let newValue
    if (arrayGuests[1] !== 0) {
       newValue = `${arrayGuests[0]} ${textValueGuests}, ${arrayGuests[1]} ${textValueToddlers}`
    } else {
        newValue = `${arrayGuests[0]} ${textValueGuests}`
    }
    if(arrayGuests[0] === 0){
        newValue = "Сколько гостей"
    }
    document.getElementsByClassName(`dropdown__dropdownInput`)[0].defaultValue = newValue
}

