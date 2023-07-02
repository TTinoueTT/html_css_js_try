
/**
 * @param {string} textId 処理対象のHTML要素のid属性
 * @returns {array} 改行を使用した場合(<br>)には、配列中の奇数番目要素は "<br/>" になる
 */
const CreateTextArray = (textId) => {
    let textArray = document.getElementById(textId).innerHTML.split("\n");
    for (let i = 0, j = textArray.length; i < j; i++) {
        // 前後の空白文字を取り除く
        // 連続する半角スペースを１つにまとめる
        textArray[i] = textArray[i].replace(/^\s+|\s+$/g, "").replace(/ +/g, " ");
    }
    let text = textArray.join("");
    let brSplitArray = text.split(/<br\s*\/?>/g);

    return brSplitArray;
}

/**
 *
 * @param {string} text 処理される配列要素
 * @param {string} textId 追加をされていくhtml要素
 * @param {number} appearanceSpeed setIntervalの間隔
 * @returns Promise型
 */
const TypewriterPromise = (text, textId, appearanceSpeed = 200, textColor = "#000") => {
    return new Promise((resolve) => {
        if (text == "") {
            document.getElementById(textId).appendChild(document.createElement("br"));
            resolve();
        } else {
            let charI = 0;
            let intervalId =
            setInterval(() =>  {
                console.log("setInterval");
                let span = document.createElement("span");
                span.innerHTML = text[charI];
                // span.style.transition = 'all 1s';
                setTimeout(() => {
                    span.style.color = textColor;
                }, 100);
                // span.style.opacity = '100%';
                span.classList.add("show");
                document.getElementById(textId).appendChild(span);
                charI++;
                if (charI >= text.length) {
                    clearInterval(intervalId);
                    document.getElementById(textId).appendChild(document.createElement("br"));
                    resolve();
                }
            }, appearanceSpeed);
        }
    });
}

/**
 *
 * @param {string} textId 取得する id要素
 * @param {number} appearanceSpeed TypewriterPromise に渡す、引数
 */
async function AsyncTypewriter(textId, appearanceSpeed, textColor) {
    const assignArray = CreateTextArray(textId);
    document.getElementById(textId).innerHTML = '';

    for (let index = 0; index < assignArray.length; index++) {
        const text = assignArray[index];
        await TypewriterPromise(text, textId, appearanceSpeed, textColor);
    }

}

// ここから実行部分
AsyncTypewriter("firstText", 200, "#621414");