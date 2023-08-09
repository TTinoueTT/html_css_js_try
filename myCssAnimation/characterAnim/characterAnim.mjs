
export const name = "square";
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
 * @param {string} textColor 表示するテキストの色
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
 * TypewriterPromise を非同期で実行する
 * @param {string} textId 取得する id要素
 * @param {number} appearanceSpeed TypewriterPromise に渡す引数
 * @param {string} textColor TypewriterPromise に渡す引数
 * @param {number} afterDelay 実行後の余韻の時間(なにかしらの次の処理を遅らせる)
 */
export const AsyncTypewriter = async (textId, appearanceSpeed, textColor, afterDelay = 500) => {
    const assignArray = CreateTextArray(textId);
    document.getElementById(textId).innerHTML = '';
    document.getElementById(textId).textContent = '';
    for (let index = 0; index < assignArray.length; index++) {
        const text = assignArray[index];
        await TypewriterPromise(text, textId, appearanceSpeed, textColor);
    }
    await new Promise(resolve => setTimeout(resolve, afterDelay));
}

// ここから実行部分
