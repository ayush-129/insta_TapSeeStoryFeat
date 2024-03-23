var arr = [
  {
    dp: "pics/me.jpg",
    story: "pics/as.jpg",
  },
  {
    dp: "pics/nik.jpg",
    story: "pics/ns.jpg",
  },
  {
    dp: "pics/abhinav.jpg",
    story:
      "https://images.unsplash.com/photo-1698912208825-5f87257dcf45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "pics/ishika.jpg",
    story: "pics/is.jpeg",
  },
  {
    dp: "pics/paras.jpg",
    story:
      "https://images.unsplash.com/photo-1710697517104-429f0842a417?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "pics/kapil.jpg",
    story:
      "https://i.pinimg.com/736x/7e/72/98/7e7298b5f06ed07a9940aef9f0904800.jpg",
  },
  {
    dp: "pics/dee.jpg",
    story:
      "https://i.pinimg.com/736x/62/81/2a/62812a64b24f5f071d635a38eb9e160e.jpg",
  },
  {
    dp: "pics/manish.jpg",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});
stories.innerHTML = clutter;
stories.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 2500);
});
