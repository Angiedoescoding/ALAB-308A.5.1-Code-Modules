export function checkAnswer(guess) {
    const answer = 'elephant';
    return guess === answer;
}

export function image() {
    const elephImg = document.createElement("img");
    elephImg.src = "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    elephImg.width = "300px";
    elephImg.height = "250px";
    document.body.appendChild(elephImg);
}