const compareBtn = document.getElementById("compare-btn");
const clearBtn = document.getElementById("clear-btn");
const expected = document.getElementById("expected");
const actual = document.getElementById("actual");
const result = document.getElementById("result");

compareBtn.addEventListener("click", function () {
    result.innerHTML = "";
    result.className = "";

    let expText = expected.value.trim();
    let actText = actual.value.trim();

    if (!expText && !actText) {
        result.innerHTML = "<li>Please enter text in both areas.</li>";
        return;
    }

    let expLines = expText.split("\n");
    let actLines = actText.split("\n");

    let ol = document.createElement("ol");
    ol.id = "differences";

    let diff = false;

    if (expLines.length !== actLines.length) {
        ol.innerHTML += "<li>Line count differs: Expected (" + expLines.length +
                        ") vs Actual (" + actLines.length + ")</li>";
        diff = true;
    }

    let max = Math.max(expLines.length, actLines.length);

    for (let i = 0; i < max; i++) {
        if ((expLines[i] || "") !== (actLines[i] || "")) {
            ol.innerHTML += "<li>Line " + (i + 1) + " differs</li>";
            diff = true;
        }
    }

    if (diff) {
        result.classList.add("change");
        result.innerHTML = "<p>Texts are different</p>";
        result.appendChild(ol);
    } else {
        result.classList.add("nochange");
        result.innerHTML = "<li>No differences found</li>";
    }
});

clearBtn.addEventListener("click", function () {
    expected.value = "";
    actual.value = "";
    result.innerHTML = "";
    result.className = "";
});