const onDrop = (value) => {
    const element = document.getElementById(value);
    
    if (element.style.display === "block")
        element.style.display = "none";
    else
        element.style.display = "block";
    
}

const learnMore = () => {
    const element = document.getElementById("learn");
    console.log(element.classList);
    if (element.classList.contains("learn-more-button-active")) {
        element.classList.remove("learn-more-button-active");
        element.classList.add("learn-more-button");
    }
    else {
        element.classList.add("learn-more-button-active");
        element.classList.remove("learn-more-button");
    }
        
}