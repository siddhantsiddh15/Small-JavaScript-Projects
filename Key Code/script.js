const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <h1>Press another Key</h1>
    <div class="key">
    ${e.key === " " ? 'Space' : e.key}
    <small>event.key</small>
</div>

<div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${e.code}
    <small>event.code</small>
</div>

<div class="key">
    Press any key to get the keyCode
</div>
    `;
});

