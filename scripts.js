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