function getData() {
  fetch(
    "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var result = data.result.results;
      var item = document.getElementsByClassName("item");
      for (let i = 0; i < 10; i++) {
        let content = document.getElementsByClassName("content");
        let pro = document.createElement("div");

        let Url = result[i].file.split("https");
        let PlaceImg = document.createElement("img");

        PlaceImg.src = "https" + Url[1];
        pro.appendChild(PlaceImg);

        let placeName = document.createElement("p");

        let text = document.createTextNode(result[i].stitle);
        placeName.appendChild(text);
        pro.appendChild(placeName);

        if (i < 2) {
          pro.className = "pro";
          PlaceImg.className = "img-pro";
          placeName.className = "text-pro";
          content[0].appendChild(pro);
        } else {
          pro.className = "item-content";
          PlaceImg.className = "img-item";

          item[0].appendChild(pro);
        }
      }

      var count = 0;
      var but = document.getElementById("but");
      but.onclick = function () {
        count += 8;
        if (count === 48) {
          but.remove();
        }
        for (let i = 2; i < 10; i++) {
          let itemContent = document.createElement("div");
          itemContent.className = "item-content";

          let Url = result[i + count].file.split("https");
          let PlaceImg = document.createElement("img");
          PlaceImg.src = "https" + Url[1];
          PlaceImg.className = "img-item";
          itemContent.appendChild(PlaceImg);
          item[0].appendChild(itemContent);

          let placeName = document.createElement("p");
          let text = document.createTextNode(result[i + count].stitle);
          placeName.appendChild(text);
          itemContent.appendChild(placeName);
          item[0].appendChild(itemContent);
        }
      };
    });
}
