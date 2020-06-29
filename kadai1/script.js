window.onload = function() {
    //ボタンがクリックされれば、alert
    document.getElementById("text-button").onclick = function() {
        alert("naka");
    };

    //html内のoutputという名前のidのdivに要素を追加
    var name = "yuto";
    var output = document.getElementById("output");
    var bignameElement = document.createElement('h2');
    bignameElement.textContent = name;
    output.appendChild(bignameElement);

};