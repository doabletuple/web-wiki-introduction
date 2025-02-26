console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

window.onload = () => {
    const commentTextarea = document.querySelector(".comment-textarea");
    const submitCommentButton = document.querySelector(".comment-submit");
    const commentList = document.querySelector(".comment-list");
    submitCommentButton.addEventListener("click", () => {
        const commentText = document.querySelector(".comment-textarea").value;
        if (commentText !== "") {
            commentTextarea.value = "";
            commentList.innerHTML += `
            <li>
                <div class="comment-item">
                    <div class="comment-author">
                        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                        <span>방문자</span>
                    </div>
                    <div class="comment-content">
                        ${commentText}
                    </div>
                </div>
            </li>
        `;
        }
    })
}
