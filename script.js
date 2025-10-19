let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 涓嶈

const noTexts = [
    "你确定的吗？", 
    "要不要再想想？", 
    "不许选这个哦！", 
    "我会很伤心的~", 
    "不行:("
];

// No 涓嶈
noButton.addEventListener("click", function() {
    clickCount++;

    // 涓嶈
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 涓嶈
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **涓嶈
    let moveUp = clickCount * 25; // 涓嶈 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 涓嶈
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 閸ュ墽澧栭崣妯哄閿涘牆澧  5 濞嗏€冲綁閸栨牭绱 
    //if (clickCount === 1) mainImage.src = "images/灏忕嫍1.gif"; // 涓嶈
    //if (clickCount === 2) mainImage.src = "images/灏忕嫍1.gif";   // 涓嶈
    //if (clickCount === 3) mainImage.src = "images/灏忕嫍2.gif";   // 涓嶈
    //if (clickCount === 4) mainImage.src = "images/灏忕嫍2.gif";  // 涓嶈
    //if (clickCount >= 5) mainImage.src = "images/灏忕嫍2.gif";  // 涓嶈

});

// Yes 涓嶈
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!爱你呀!! ( >▽ <)~</h1>
            <img src="images/小狗3.gif" alt="爱你呀!! ( >▽ <)~" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});