// let text = document.getElementById('firstText').textContent;
let textArray = document.getElementById('firstText').innerHTML.split("\n");

for (let i = 0, j = textArray.length; i < j; i++) {
        // 前後の空白文字を取り除く
        // 連続する半角スペースを１つにまとめる
        textArray[i] = textArray[i].replace(/^\s+|\s+$/g, "").replace(/ +/g, " ");
}

// let text = textArray.join("");
let brSplitArray = textArray.join("").split(/<br\s*\/?>/g);

const brAssignArray = brSplitArray.reduce(function (result, value, index, array) {
    if (index < array.length - 1) {
        return result.concat(value, "<br/>");
    } else {
        return result.concat(value);
    }
}, []);


console.log(brAssignArray);

let text = brAssignArray[0];
document.getElementById('firstText').innerHTML = '';

let i = 0;
let intervalId = setInterval(function() {
    let span = document.createElement('span');
    span.innerHTML = text[i];
    span.style.color = 'black';
    document.getElementById('firstText').appendChild(span);

    i++;
    if (i >= text.length) {
        clearInterval(intervalId);
    }
}, 100);