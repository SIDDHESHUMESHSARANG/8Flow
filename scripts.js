document.getElementById("button").addEventListener("click", function () {

    const content = document.getElementById("note-content").value;

    const blob = new Blob([content], { type: "text/plain" });

    const a = document.createElement("a");

    const url = URL.createObjectURL(blob);

    a.href = url;

    a.download = "notes.txt";

    a.click();

    URL.revokeObjectURL(url);
});

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", () => {
    if (isMobileDevice()) {
        window.location.href = "formobusers.html"; // Replace with your own page URL
    }
});
