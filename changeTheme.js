function changeTheme() {
    var col = document.getElementById("body");
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}
