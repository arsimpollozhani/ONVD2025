
    function copyCode() {
    const code = document.getElementById("codeSnippet").innerText;
    navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
}).catch(err => {
    console.error("Failed to copy: ", err);
});
}
