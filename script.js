document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value.trim();
    if (question === '') {
        alert('請輸入一個問題！');
        return;
    }
    
    // 簡單的隨機答案生成（可以擴展）
    const answers = [
        '是的，這是可能的。',
        '不，這不是最好的選擇。',
        '試試另一種方法。',
        '時間會告訴你答案。',
        '專注於你的目標。',
        '尋求更多資訊。',
        '相信你的直覺。',
        '這取決於你的決定。'
    ];
    
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    document.getElementById('answerDisplay').innerHTML = `<p><strong>你的問題：</strong> ${question}</p><p><strong>答案：</strong> ${randomAnswer}</p>`;
    
    // 清空表單
    document.getElementById('question').value = '';
});