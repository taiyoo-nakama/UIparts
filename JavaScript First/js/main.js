console.log("Hello world");
//コメントですconsole.log("Hello world")//コメントです
let say = "Hello"
console.log(say);
say = "Goodbye"
console.log(say);


//数値変換//
const str = "123";
console.log(typeof str);
const num = Number(str);//Number()で値を数値に変換できる//
console.log(typeof num);

//Boolean変換//
//0,null,undefined,("")などはfalseになる//
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"))
console.log(Boolean(""))

//演算子//
const add = 6 + 2;
console.log(add);
const sub = 5 - 2;
console.log(sub);
const mul = 8 * 4;
console.log(mul);
const div = 14 / 6;
console.log(div);

//剰余演算子//
const per = 5 % 2;
console.log(per);

//インクリメントとデクリメント//
//++：１増加
//--：１減少
let inc = 2;
inc++;
console.log(inc);
let dec = 2;
dec--;
console.log(dec);

//if文
const price = 1800;

if (price < 1000) {
  console.log("安い");
} else if (price > 2000) {
  console.log("高い");
} else {
  console.log("ちょうど良い");
}

const price1 = 1000;
const tax = 0.1;
console.log(price1 * tax);

const A = 80 + 90 + 60 + 85 + 100;
const B = 40 + 30 + 50 + 25 + 60;

console.log(A);
console.log(B);

if (A > 300 && B > 300) {
  console.log("素晴らしい");
} else if (A > 300 || B > 300) {
  console.log("普通");
} else if(A < 300 && B < 300){
  console.log("頑張ろう");
}

const result = "大凶";

switch (result) {
  case "大吉":
    console.log("大吉" + "です！");
    break;
  case "中吉":
    console.log("中吉" + "です！");
    break;
  case "小吉":
    console.log("小吉" + "です！");
    break;
  case "吉":
    console.log("吉" + "です！");
    break;
  case "季吉":
    console.log("季吉" + "です！");
    break;
  case "大凶":
    console.log("大凶" + "です！");
    break;
}

const text =(number1, number2)=>{
  const value = number1 + number2;
  return value;
}

console.log(text(2, 4));

function advise(name, test) {
  if (test < 30 && test >=0) {
    return `${name}君もう少し頑張りましょう`;
  } else if (test >= 30 && test < 70) {
    return `${name}君普通です`;
  } else if (test >= 70 && test < 100)
    return `${name}君良くできました`;
}

console.log(advise("A", 80));
console.log(advise("B", 15));
console.log(advise("C", 55));
//文字列は””を忘れずに！

//配列番号
const array = ["太郎", "四郎", "三郎", "次郎", "吾郎",];
console.log(array);
console.log(array[0]);//0が一番目
console.log(array[1]);//0が一番目
console.log(array[2]);//0が一番目
console.log(array[3]);//0が一番目
console.log(array[4]);//0が一番目

//要素の総数・要素の置き換え
array[1] = "二郎";
console.log(array);
console.log(array.length);

//要素の追加・削除
array.push("六郎");//末尾に追加
array.unshift("一郎");//先頭に追加
console.log(array);

array.pop();//末尾を削除
array.shift();//先頭を削除
console.log(array);

array.splice(1, 3);//2番目から3つ削除
console.log(array);

//配列同士の結合
const drray = ["a", "b", "c"];
const newArray = drray.concat(["d", "e"]);
console.log(newArray);
//スプレッド公文を使った場合
const NewArray = ["x", "y", "z", ...drray];
console.log(NewArray);
//concatの場合
const NewArrayConcat = ["x", "y", "z"].concat(array);
console.log(NewArrayConcat);
//スプレッド（任意の位置）
const ewArray = ["x", ...drray, "z"];
console.log(ewArray);

const hrray = ["HTML", "CSS", "JavaScript", "PHP"];
const indexOfJS = hrray.indexOf("JavaScript");
console.log(indexOfJS);
console.log(hrray[indexOfJS]);

//Rubyという要素はないため-1が返される
console.log(array.indexOf("Ruby"));

//find 関数を満たす配列内の最初の要素を返す
const trray = [10, 30, 5, 40];

const found = trray.find(function (element
) {
  return element > 20
});

console.log(found);

const urray = ["a", "b", "c", "d", "e"];

//インスタデッックスから２から4の範囲を取り出す
console.log; (urray.slice(2, 4));

//第二引数を省略した場合は、代位一引数から末尾の要素までを取り出す。
console.log(urray.slice(1));

//要素が含まれているかの取得
// const grray = ["HTML", "CSS", "JavaScript", "PHP"];
// const indexOfJS = grray.indexOf("JavaScript");

// if (indexOfJS !== -1) {
  // console.log("配列にJavaScriptが含まれています")；
// }

//includesは含まれているならtrueを返す
// if (array.includes("JavaScript")) {
  // console.log("配列にJavaScriptが含まれています")；}

//forEach
//ForEachは配列の前要素に対して関数を実行することができる。
//第一引数には要素が自動で入り、第二引数にはその要素の番号が自動で入る
const crray = ["太郎", "二郎", "三郎", "四郎", "吾郎"];

crray.forEach(function (item, index) {
  if (item == "三郎") {
    console.log(`${item}は${index}番目の要素です`);
  }
});

//map
//maphは前要素に対して関数を実行し、処理結果を配列に格納し新しい配列を作れる。
const qrray = [7, 63, 16, 55, 82];

//const sesult = qrray.map(function (item) {
  //return item * 2;
//});

//console.log(sesult);

//filter
//配列の全要素に対して関数を実行し、条件に合致した配列のみ格納する
const aesult = qrray.filter(function (item) {
  return item % 2 === 1;
});

console.log(aesult)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numb = numbers.map((item) => {
  if (item % 2 == 0) {
    return item * 2;
  }
  return item;
});

console.log(numb);

//for文
//for(初期値；条件式；増減式){
  //処理を記述
// }
const lists = ["太郎", "次郎", "三郎", "四郎", "吾郎"];

for (let i = 0; i < lists.length; i++){
  console.log(lists[i]);
}

//while
// 回数の決まっていない繰り返し処理を行うメソッド
// 何度も同じプログラムを実行したい場合はWhile文
// while(条件式){
  // 処理を記述
// }

// JavaScriptで繰り返し処理を行うときは用途に応じて、For文をWhile文を使い分ける
// 繰り返し回数が決まっている場合はFor文
// 繰り返し回数が決まっていない場合はWhile文

let c = 0;

while (c < 10) {
  c = c + 1;
  console.log(c)
}

// do...while文
// do...while文は繰り返し処理を行ってからその処理を評価するため、少なくとも一回は繰り返し処理が行われる。
// do...whileは少なくても必ず一回は処理する

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 6);

const test = ["国語", "数学", "英語",];
test.push("理科", "社会",)

console.log(test);

console.log(test.length);


for (let i = 1; i <= 50; i++){
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let water = 1000;
const drinkWater = 180
while (water > 0) {
  console.log(water);
  water = water - drinkWater;
}
console.log("水を飲み干した");

//文字列へのアクセス
//文字列の特定の位置にある文字にはインスタデッックスを指定してアクセスできる。
const sty = "プログラミング";

//配列と同じようにインデックスでアクセスできる。
console.log(sty[0]);
console.log(sty[1]);
console.log(sty[2]);

//文字列の分解と結合
//文字列を分解してはいれつするにはSplitsを利用できます。
const strings = "HTML・CSS・JavaScript".split("・");
console.log(strings);

//分解してできた文字列の配列を結合して文字列を作る際に、joinが利用できます。
const sri = "HTML・CSS・JavaScript".split("・").join("、");
console.log(sri);

//文字列の長さ
console.log(sty.length);
//文字列の比較
//「＝＝＝」を利用。　同じ文字列同士なら結果はTrueをなる
console.log("プログラミング" === "プログラミング");
console.log("PHP" === "Ruby");

//文字列の一部を取得
//sliceは第一引数に開始位置、第二引数に終了位置を指定し、その範囲を取り出した新しい文字列を返す。
console.log(sty.slice(2, 5));
console.log(sty.slice(2));

//substringは、同じく第一引数に開始位置、第二引数に終了位置を指定し、その範囲を取り出して新しい文字列を返す。
//ーが入っている場合は無条件に０になる
console.log(sty.substring(2, 0));

//sliceやsubstringはindexOFなど位置を取得するものと組み合わせて使うことが多い
// 次のコードでは、？の位置をindexOfで取得し、それ以降の文字列をSliceで切り出している。
const url = "https://example.com?param=1";

const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);

console.log(queryString);

//文字列の検索
//・文字列のインデックスの取得
//文字列自体を取得
//文字列が含まれているかを取得

//文字列によるインデックスの取得
//指定した要素が文字列のどの位置にあるか知りたいとき、IndexOfを使う。

const stg = "HTMLとCSSとJavaScriptとPHP";

const indexOfJava = stg.indexOf("JavaScript");
console.log(indexOfJava);

//文字列にマッチした文字列の取得
const searchWord = "Script";
const index = stg.indexOf(searchWord);

if (index !== -1) {
  console.log(`${searchWord}が見つかりました`);
} else {
  console.log(`${searchWord}は見つかりませんでした`);
}

//文字列が含まれているかの取得
console.log(stg.includes("PHP"));
console.log(stg.includes("Ruby"));

//ダイアログ
//ダイアログはユーザーにメッセージを表示したい時に使う
//警告のメッセージを表示するには、alert関数を使う
//「はい」「いいえ」のダイアログはprompt関数
//ユーザーの入力を受け付けるには、prompt関数

//alert
//alertダイアログを表示するにはalert関数の引数に表示したいメッセージを指定します。
alert('メッセージ');

//conrirm
//connfirm関数では、「はい」「いいえ」のダイアログを出す方法。confirm関数でダイアログを出すには、引数に表示したいメッセージを指定

confirm('メッセージ');

//prompt
//promptでユーザーの入力を受け付ける方法。
//promptの戻り値は入力された文字列になる
const resul = prompt("入力してください");
console.log(resul);

//スケジューリング
//関数をすぐには実行させず、ある時点で実行するようにしたい時にスケジューリングを使用
//setTimeoutは指定時間経過後、一度だけ関数を実行
//setIntervalは各実行の間は指定した感覚で、定期的に関数を実行

//setTimeout
//const timerld = setTimeout(func, delay, arg);

//func::関数名
//delay::f実行前の遅延時間で、ミリ秒単位で表す
//arg::関数の引数


//function you(phrase,who) {
//  alert(phrase + ',' + who);
//}
//setTimeout(you, 1000,"Hello","COSCHTECH");


//crearTimeoutを使ったキャンセル
//setTimeoutは結果として、実行を取り消すために使用できるtimerldを返す


//const timerld = setTimeout(you, 1000,"Hello","COSCHTECH");
//clearTimeout(timerld);

//setInterval
//公文：：const timerld = setInterval(func,delay,arg);
//setTimeoutとは異なり、関数ではなく定期的に与えられた時間感覚で実行します。
//呼び出しを止めるためにはclearInterval(timerld)を使用します。


//function dis() {
//  alert("Hello");
//}
//const timer = setInterval(dis, 1000);
//function stop() {
//  clearInterval(timer);
//}
//setTimeout(stop, 5000)



//オブジェクト
//オブジェクトは波格好{}と任意のプロパディの一覧からなる。プロパティは「key:value」のペアでkeyは文字列で、valueはなんでも良い。配列の中身に1つ1つ名前がついているようなイメージ

//const user = {
  //name:"太郎",キー"name"に値”太郎”が格納される
  //age:20,キー”age"に値20が格納される
//};

//const user = {
//  nom: "太郎",
//  age: 20,
//};
//
//console.log(user.nom);
//console.log(user.age);


//オブジェクト内のメソッド

//const user = {
//say: function () {
//  console.log("Hello");
//},
//};

//user.say();

//const user = {
//say() {
//  console.log("Hello");
//},
//};

//user.say();

//メソッドの中の「This」
//オブジェクトの中のメソッド（関数）からオブジェクトに格納されている情報にアクセスすることは多い
//Thisの値はメソッドを呼び出すのに使われた「ドットの前」のオブジェクト。アロー関数うないにThisは使うことはできない

const user = {
  nom: "太郎",
  age: 20,
  dire: function () {
    console.log(this.nom);
  },
};

user.dire();
  
//Mathオブジェクト
//Mathオブジェクトとは、主に数値計算を行う際に利用されるもので、多くのプロパティ、メソッドが用意されています。

//Math.rendom()
//配列内のランダムな数値を取り出したい時に使用。少数による乱数を生成することができる。

//Math.ceil()
//Math.ceil()は()内に引数を与えることができ、引数の値を整数にすることができる。

//Math.floor()
//Math.floor()はMath.ceil()と同様に引数の値を整数にすることができす。少数を繰り下げることで整数にする。

//Math.round()
//Math.round()も引数の値を整数にしますが、少数を四捨五入することで整数にする。

console.log(Math.random());//0~1.0未満の乱数がランダムで表示
console.log(Math.ceil(5.4));//6
console.log(Math.floor(5.4));//5
console.log(Math.round(5.4));//5
console.log(Math.floor(Math.random() * 20));//0~19のうちの整数の乱数を生成

//JSON
//バックエンドにデータを送る際、そのままの形ではデータを送ることはできない。基本的にはオブジェクトをJSONに変換して送る
//JSON（JavaScript　Object　Notation）は、構造化したデータを表すためのデータ記述言語
//オブジェクトとJSONは似ている形をしているが、オブジェクトと違い、JSONはキーをダブルクウォートで囲む

const student = {
  nom: "太郎",
  age: 20,
  gender: "男性",
  skills: ["hrml", "css", "js"],
  wife: null,
};

const json = JSON.stringify(student);

console.log(student);
console.log(json);

const school = {
  nom: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "Laravel"],
  createSentense() {
    let date;
    this.skills.forEach((skill, index) => {
      if (index == 0) {
        date = skill;
      } else {
        date = `${date}と${skill}`;
      }
    });
    return `${this.nom}は${this.month}ヶ月で${date}を学ぶことができます`;
  },
};
console.log(school.createSentense());


//日付と時刻
//インスタンスの生成
//はじめにオブジェクトに設計図を用意
//クラスから生成したオブジェクトはインスタンスと呼ぶ。＝具体的になもの

//new Date
/*const dt = new Date()
console.log(dt)*/

//new Dte(value)
/*const dt = new Date('2020/12/01 12:34;56');
console.log(dt)*/

//インスタンスから各種値の取得

//年
const dt = new Date()
const year = dt.getFullYear()
console.log(year)

//月
const month = dt.getMonth() + 1
console.log(month)

//日
const date = dt.getDate()
console.log(date)
//曜日
const dateT = ["日", "月", "火", "水", "木", "金", "土"]
const day = dateT[dt.getDay()]
console.log(day)
//時間
const hours = dt.getHours()
console.log(hours)
//分
const minuts = dt.getMinutes()
console.log(minuts)
//秒
const seconds = dt.getSeconds()
console.log(seconds)

//日付の計算
//日付の加算：減産にはSetプロパティを利用

//1年後、1年前
dt.setFullYear(dt.getFullYear() + 1);
console.log(dt)

/*dt.setFullYear(dt.getFullYear() - 1);
console.log(dt)*/

//1ヶ月後・1ヶ月前
dt.setMonth(dt.getMonth() + 1);
console.log(dt)

//1日後・1日前
dt.setDate(dt.getDate() + 1);
console.log(dt)

//1時間後・1時間前
dt.setHours(dt.getHours() + 1);
console.log(dt)

// １分後・１分前
dt.setMinutes(dt.getMinutes() + 1);
console.log(dt)

//1秒前・１秒後
dt.setSeconds(dt.getSeconds() + 1);
console.log(dt)

//DOM操作

//DOMとは
　//DOMとは、JavaScriptを使って、HTMLの画像を切り替えたり、ボタンがクリックされたらアラートを出したりすることができ　　る。
　　　//1・DOMツリーと呼ばれる階層構造
　　　//2・ノードと呼ばれるDOMツリーを形成するオブジェクト
　　　//３・JavaScriptとWevを繋ぐ

//DOMツリー
　//DOMはツリー構造になっており、要素が入れ子になっている

//ノード
　//DOMツリーを形成する一つ一つのオブジェクトをノードと呼びます。主なノードの種類はドキュメントノード、テキストノー　　ド、属性ノード、要素ノード、コメントノードなど
　　　//これらにアクセスすることで値の取得や変更をすることができる。
　　　//上下関係にある場合、上のノードが親ノードで、下のノードがこノードです。
　　　//また同階層のノードは兄弟ノードと呼ぶ

//DOM操作
　//DOM操作とはDOMツリーの中のノードを操作するとういうコード
　//例）htmlタグの中のBodyタグのDIvタグ野中のpタグの中にアクセスし、pタグの色を変えたりテキストを変えたりするという　　こと

//そうその取得
　//はじめに行うのが要素の取得。代表的な要素の取得方法には以下のようなものがあげられる。

//document.getElementByld(id)
 //idで要素を取得

//document.gerElementsByClassName(class)
 //classで要素を取得

//document.getElementsByName(name)
 //name属性で要素を取得

//document.gerElementByTagName(tagname)
 //タグ名で要素を取得

//document.querySlwctor(selector)
 //セレクター要素（最初の一つ）を取得

//document.querySelectorAll(selector)
  //セレクターで要素（複数）を取得

document.getElementsByClassName('ttl')

//ノードウォーキング
　//先ほどの要素取得では直接要素を取得したが、ノードを機転に相対的に別ノードを取得する方法もあります。このように相対的　　にノードを取得する方法をノードウォーキングと言います。

//parentNode
 //親ノードを取得

//childNodes
 //子ノード群を取得

//firstChild
 //最初の子ノードを取得

//lastChild
 //最後の子ノードを取得

 //previousSibling
  //直前のノードを取得

  //nextSibling
   //直後のノードを取得

//document.getElementsByClassName('ttl-container')[0].firstChild
   

//属性の取得・設定

//プロパティとしての取得・設定
　//className
    //クラス名の取得
  
  //id
    //idの取得

  //testContent/innerContent
    //ノードないのテキストの取得

  //innerHTML
    //ノードないのHTML要素の取得

  //style
    //要素のStyleの属性の取得

  //nextSibleing
   //直後のノードを取得

/*document.getElementsByClassName('ttl-container')[0].firstChild.textContent
document.getElementsByClassName('ttl-container')[0].firstChild.textContent = 'コーチテック'
   document.getElementsByClassName('ttl-container')[0].firstChild.style.color='red'*/

//関数の返り血としての取得・設定
//関数を使って引数に属性名を入れて取得する方法

  //getAttribute([属性名])
  //setAttribute([属性名],[値])

  /*document.getElementsByTagName('div')[2].getAttribute('class')
//class名を変更することもできる
document.getElementsByTagName('div')[2].setAttribute('class','hoge')*/

//イベント
　//ブラウザ上ではボタンが押された時、マウスが文字列の上に載った時、テキストボック　　スの内容が変更された時など様々な場面でイベントが発生する。
  //JavaScfiptがそれらを検知して処理を実行することができます。
  //イベントの種類

  //DOMContentLoaded
    //Webオエージの読み込みが完了した時に発動

  //click
    //マウスボタンをクリックした時に発動

  //textContent/innerContent
    //ノードないのテキストの取得

  //cahnge
    //フォーム部品の状態が変更された時に発動

  //scroll
   //画面がスクロールした時に発動

document.addEventListener('DOMContentLoaded', function () {
 alert('ページが読み込まれました');
});

console.log();

/*element.addEventListener([イベントの種類], [実行したい処理])
  今回はここで画面がロードされた時に処理が走るDOMContentLoadedを使用
  このイベントを検知すると第二引数の関数が実行され以下の内容が実行される

  alert('ページが読み込まれました);*/

  /* ボタンをクリックした時に走る処理の実装
      index.htmkに記述*/

/*const button = document.querySelector("button");
button.addEventListener("click",function(){
 alert("クリックされました");
});*/

/*例外処理
  
try...catch構文
  try...catch構文のtryブロック内で例外が発生すると、tryブロック内のそれ以降のショッリハ実行されず、catch節に処理が移行する
  
  catch節
    tryブロック内で例外が発生すると、発生したエラーオブジェクトとともに呼び出される

  finally節
    tryブロック内で例外が発生したかどうかには関係なく、必ずtry文の最後に実行される
  */

/*try {
  console.log("try節:この行は実行されます");
  undefinedFunction();
  console.log("try節:この行は実行されません");
} catch (error) {
  console.log("cath節:この行は実行されます");
  console.log(error.message);
} finally {
  console.log("finally節:この行は実行されます");
}*/

try {
  undefinedFunction();
} catch (error) {
  console.error(error);
}

/*try {
  undefinedFunction();
} finally {
  console.log("この行は実行されます");
}

/*throw文
  throw文を使うとユーザーが例外を投げることができます
  例外として投げられたオブジェクトは、catch節で関数の引数のようにアクセスできます*/
try {
  throw new Error("例外が投げられました");
} catch (error) {
  console.log(error.message);
  }