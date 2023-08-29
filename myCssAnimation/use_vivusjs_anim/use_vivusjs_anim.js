// new Vivus( "sample", //SVGに指定したID
// {
// type: "oneByOne",  //アニメーションのタイプ
// duration: 500, //アニメーションの時間
// forceRender: false, //パスが更新で再レンダリングさせない
// },
// function (obj) {
// obj.el.classList.add("done"); //アニメーション後にdoneクラスを付与
// }
// );

new Vivus( 'epidemic-glaze-logo', { // svgに指定するid名
    type: "delayed",
    // delay: 500,
    duration: 500, // アニメーションの長さ
    forceRender: false, //パスが更新で再レンダリングさせない
});