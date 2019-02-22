// Modal
window.onload = function() {
    let modal = document.getElementById("sign-up-modal");
    let displayButton = document.getElementById("sign-up");
    let close = document.getElementById("modal-close");

    displayButton.onclick = function() {
        modal.style.display = "block";
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

