
function showElement(a) {
    for (let i = 1; i <= 10; i++) {
        if (a === i ) {
            document.getElementById(`text-${a}`).style.display = "block";
            document.getElementById(`cont-${a}`).style.backgroundImage = "linear-gradient(to right, orange, yellow)";
            document.getElementById(`cont-${a}`).style.borderBottomLeftRadius = "10px";
            document.getElementById(`cont-${a}`).style.borderTopLeftRadius = "10px";
            document.getElementById(`less-cont-${a}`).style.backgroundImage = "linear-gradient(to right, orange, yellow)";
            document.getElementById(`less-cont-${a}`).style.borderRadius = "10px";
        }
        else{
            document.getElementById(`text-${i}`).style.display = "none";
            document.getElementById(`cont-${i}`).style.backgroundImage = "linear-gradient(to left, orange, yellow)";
            document.getElementById(`less-cont-${i}`).style.backgroundImage = "linear-gradient(to left, orange, yellow)";
            document.getElementById(`less-cont-${i}`).style.borderRadius = "10px";
        }
    } 


}

