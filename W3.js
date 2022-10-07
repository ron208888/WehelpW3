function getData() {
  fetch(
    "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var result = data.result.results;

      for (let i = 0; i < 2; i++) {
        let content = document.getElementsByClassName("content");
        let pro = document.createElement("div");
        pro.className = "pro";

        let Url = result[i].file.split("https");
        let PlaceImg = document.createElement("img");
        PlaceImg.className = "img-pro";
        PlaceImg.src = "https" + Url[1];
        pro.appendChild(PlaceImg);

        let placeName = document.createElement("p");
        placeName.className = "text-pro";
        let text = document.createTextNode(result[i].stitle);
        placeName.appendChild(text);
        pro.appendChild(placeName);

        content[0].appendChild(pro);
      }

      for (let i = 0; i < 8; i++) {
        var item = document.getElementsByClassName("item");

        let itemContent = document.createElement("div");
        itemContent.className = "item-content";

        let Url = result[i + 2].file.split("https");
        let PlaceImg = document.createElement("img");
        PlaceImg.src = "https" + Url[1];
        PlaceImg.className = "img-item";
        itemContent.appendChild(PlaceImg);
        item[0].appendChild(itemContent);

        let placeName = document.createElement("p");
        let text = document.createTextNode(result[i + 2].stitle);
        placeName.appendChild(text);
        itemContent.appendChild(placeName);
        item[0].appendChild(itemContent);
      }

      var count = 0;
      var but = document.getElementById("but");
      but.onclick = function () {
        count += 8;
        if (count === 48) {
          but.remove();
        }
        for (let i = 2; i < 10; i++) {
          // var item = document.getElementsByClassName("item");

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
