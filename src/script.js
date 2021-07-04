const btnMenu = document.querySelector(".dropdown")
const menu = document.querySelector(".dropdown__dropdownContent")
const inputMenu = document.querySelector(".dropdown__dropdownInput")
const toggleMenu = () => {
    menu.classList.toggle("show")
    inputMenu.classList.toggle("open")
}

btnMenu.addEventListener("click", e => {
    e.stopPropagation()
    toggleMenu();
})

menu.addEventListener("click", e => {
    if (e.target.className === "switcher__btnPlus") {
        e.target.parentElement.children[1].innerText = Number(e.target.parentElement.children[1].innerText) + 1
        e.target.parentElement.children[0].removeAttribute("disabled")
        if (!document.querySelectorAll(".dropdown__clear")[0].classList.contains("dropdown__clear_show")){
            document.querySelectorAll(".dropdown__clear")[0].classList.toggle("dropdown__clear_show")
        }
    }
    if (e.target.className === "switcher__btnMinus") {
        e.target.parentElement.children[1].innerText = Number(e.target.parentElement.children[1].innerText) - 1
        if (e.target.parentElement.children[1].innerText === "0") {
            e.target.parentElement.children[0].setAttribute("disabled", "disabled")
            let array = []
            document.querySelectorAll(".switcher__value").forEach(a => array.push(a.innerText))
            if (array.filter(a=> a === "0").length === 3){
                if (document.querySelectorAll(".dropdown__dropdownInput")[0].defaultValue === "Сколько гостей") {
                document.querySelectorAll(".dropdown__clear")[0].classList.toggle("dropdown__clear_show")
                }
            }
        }
    }
    if (e.target.classList.contains("dropdown__clear")) {
        document.querySelectorAll(".switcher__value").forEach(a => a.innerText = 0)
        document.getElementsByClassName(`dropdown__dropdownInput`)[0].defaultValue = "Сколько гостей"
        document.querySelectorAll(`.switcher__btnMinus`).forEach(a => a.setAttribute("disabled", "disabled"))
        document.querySelectorAll(".dropdown__clear")[0].classList.toggle("dropdown__clear_show")
    }
    if (e.target.className === "dropdown__toApply"){
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
        if (arrayGuests[0] === 0) {
            newValue = "Сколько гостей"
        }
        document.getElementsByClassName(`dropdown__dropdownInput`)[0].defaultValue = newValue
        toggleMenu()
    }
    e.stopPropagation()
    return
})


document.addEventListener('click', e => {
    const target = e.target
    const its_menu = target == menu || menu.contains(target)
    const its_btnMenu = target == btnMenu
    const menu_is_active = menu.classList.contains('show')
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu()
    }
})

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



