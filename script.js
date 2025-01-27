logo.onclick = function () {
    location.href = "https://casadofps.com.br";
}

menuButton.onclick = function () {
    menuList.classList.toggle("active");
    if (menuList.classList.contains ("active")) {
        document.querySelector("#menuButton").src = "/images/close.svg";
    } else {
        document.querySelector("#menuButton").src = "/images/toggle-menu.svg";
    }
}
buttonOpenPinoseTravas.onclick = function () {
    modalPinoseTravas.showModal();
}

buttonOpenPinoseTravas2.onclick = function () {
    modalPinoseTravas.showModal();
}

buttonCloseModalPinoseTravas.onclick = function () {
    modalPinoseTravas.close();
}

buttonOpenLaminas.onclick = function () {
    modalLaminas.showModal();
}

buttonOpenLaminas2.onclick = function () {
    modalLaminas.showModal();
}

buttonCloseModalLaminas.onclick = function () {
    modalLaminas.close();
}

buttonOpenParafusos.onclick = function () {
    modalParafusos.showModal();
}

buttonOpenParafusos2.onclick = function () {
    modalParafusos.showModal();
}

buttonCloseModalParafusos.onclick = function () {
    modalParafusos.close();
}