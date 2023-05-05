const quiz =[
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS',
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '赤色は',
    answers: [
      '朱色',
      '黄土色',
      'あお',
      '黄色',
    ],
    correct: '朱色'
  },{
    question: 'いちにーさん',
    answers: [
      'しー',
      'さん',
      'うぇい',
      'だー',
    ],
    correct: 'だー'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent =  quiz[quizIndex].question ;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    window.alert('終了！' + 'あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
  handleIndex++;
}
