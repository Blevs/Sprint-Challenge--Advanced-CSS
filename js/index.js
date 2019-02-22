// Modal
window.onload = function() {
    let modal = document.getElementById("sign-up-modal");
    let displayButton = document.getElementById("sign-up");
    let close = document.getElementById("modal-close");

    displayButton.onclick = function() {
        modal.style.visibility = "visible";
        modal.style.opacity = 1;
    }

    close.onclick = function() {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }
    }
}

