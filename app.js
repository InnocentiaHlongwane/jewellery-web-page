function shopOnline() {
    let name = prompt ("What is your name?");
    alert (
        "Exactly what you looking for!" + " " + name + " " + "iterms that perfectly work with your wardrobe");

    let email = prompt ("Sign up to recieve our catalogue, enter your email address.");
    alert(
        "catalogue will be sent to" + " " + email + " " + ", Happy shopping🛍️"
    );
}

    let shopButton = document.querySelector("button");
    shopButton.addEventListener("click, shopOnline");