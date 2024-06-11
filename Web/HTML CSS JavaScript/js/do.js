let btnClick = () => {
  let btnValue = document.querySelector(".search-input").value;
  if (btnValue === "") {
    alert("未输入内容");
  } else {
    alert(`你输入了:${btnValue}`);
  }
};

let wipper = document.querySelector("#wipper");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let domList = document.querySelector("#wipper");
let items = domList.querySelectorAll("a");
let num = items.length - 1;
let index = 0;
let pointer = document.querySelector(".over-view");

const clearclass = function () {
  for (let i = 0; i < items.length; i++) {
    items[i].className = "item deactive";
    pointer.querySelectorAll("li")[i].className = "pointer-item";
  }
};

leftBtn.addEventListener("click", function () {
  move("left");
});

rightBtn.addEventListener("click", (e) => {
  move("right");
  return e;
});

const move = (d) => {
  if (d === "right") {
    if (index === num) {
      index = 0;
    } else {
      index++;
    }
  } else {
    if (index === 0) {
      index = num;
    } else {
      index--;
    }
  }
  clearclass();
  items[index].className = "item active";
  pointer.querySelectorAll("li")[index].className =
    "pointer-item pointer-item-active";
};

let autoChange = setInterval(() => {
  move("right");
}, 3000);

wipper.onmouseover = function () {
  clearInterval(autoChange);
  leftBtn.className = "left-btn active";
  rightBtn.className = "right-btn active";
};

wipper.onmouseout = (e) => {
  clearInterval(autoChange);
  autoChange = setInterval(() => {
    move("right");
  }, 3000);
  leftBtn.className = "left-btn deactive";
  rightBtn.className = "right-btn deactive";
  return e;
};

window.onload = (e) => {
  for (let i = 0; i <= num; i++) {
    if (i > 0) {
      items[i].className = "item deactive";
    }
    let li = document.createElement("li");
    li.className = "pointer-item";
    pointer.appendChild(li);
  }
  pointer.querySelectorAll("li")[0].className =
    "pointer-item pointer-item-active";
  return e;
};

const test = () => {
  axios("get", "http://localhost:8088/test")
    .then((res) => {
      document.querySelector("#container").innerHTML=res.data
      console.log(`result:${res} ${typeof res}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
function axios(methods, url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(methods, url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(data);
    xhr.onreadystatechange = (e) => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log({
          status: xhr.status,
          state: xhr.readyState,
        });
        resolve(JSON.parse(xhr.responseText));
      }
      if(xhr.status===400||xhr.status===500) {
        console.log({
          status: xhr.status,
          state: xhr.readyState,
        });
        reject({
          status: xhr.status,
          state: xhr.readyState,
        });
      }
      return e;
    };
  });
}
