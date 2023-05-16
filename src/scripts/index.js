var main = document.getElementById("main");
var addUser = document.getElementById("addUser");
var userNumSelect = 0;
var counter = main.children.length < 0 ? main.children.length : 0;
var arrContent = ["عميل جديد", 0, 0];
var arrClassName = ["user", "mony", "gold"];
var newData = {
    id: 0,
    data: {
        name: arrContent[0],
        mony: 0,
        gold: 0,
    },
};
if (localStorage.userIdSelect) {
    console.log("There userIdSelect: ", localStorage.userIdSelect);
}
else {
    localStorage.setItem("userIdSelect", "0");
}
var userIdSelect;
var dataCraft = [
    {
        id: 0,
        data: {
            name: "هنتر",
            mony: 0,
            gold: 0,
        },
    },
    {
        id: 12,
        data: {
            name: "احمد",
            mony: 13,
            gold: 123,
        },
    },
    {
        id: 2,
        data: {
            name: "خالد",
            mony: 1453,
            gold: 15343,
        },
    },
    {
        id: 176,
        data: {
            name: "سالم",
            mony: 53,
            gold: 627,
        },
    },
    {
        id: 82,
        data: {
            name: "ريان",
            mony: 1983,
            gold: 89123,
        },
    },
    {
        id: 82,
        data: {
            name: "سيف",
            mony: 100,
            gold: 50,
        },
    },
    {
        id: 932,
        data: {
            name: "راشد",
            mony: 10,
            gold: 534,
        },
    },
];
var start = function () {
    var _loop_1 = function () {
        var newDiv = document.createElement("div");
        newDiv.className = "tab";
        newDiv.dataset.lala = String(i);
        counter++;
        newDiv.onclick = function () {
            var lala = newDiv.dataset.lala;
            console.log(lala);
            document.getElementById("user-show").style.display = "flex";
        };
        console.log(i);
        for (var j = 0; j < 3; j++) {
            console.log(j);
            var newSpan = document.createElement("span");
            var newContent = document.createTextNode("".concat(Object.values(dataCraft[i].data)[j]));
            newSpan.appendChild(newContent);
            newSpan.className = arrClassName[j];
            newDiv.appendChild(newSpan);
        }
        main.appendChild(newDiv);
    };
    for (var i = 0; i < dataCraft.length; i++) {
        _loop_1();
    }
};
start();
var changePage = function (btn) {
    document.getElementById("user-show").style.display = "none";
    var mainChild = document.body.children;
    for (var _i = 0, mainChild_1 = mainChild; _i < mainChild_1.length; _i++) {
        var child = mainChild_1[_i];
        child.classList.remove("df");
    }
    var secIds = ["home", "invoices", "bonds"];
    var idNum = 0;
    secIds.map(function (id) {
        if (btn.dataset.id == id) {
            document.body.children[idNum].className = "df";
        }
        idNum++;
    });
    idNum = 0;
};
var NewDiv = function () {
    var newDiv = document.createElement("div");
    newDiv.className = "tab";
    newDiv.dataset.lala = String(counter);
    newDiv.onclick = function () {
        var lala = newDiv.dataset.lala;
        userIdSelect += lala;
        console.log(userIdSelect);
        document.getElementById("user-show").style.display = "flex";
    };
    for (var i = 0; i < arrContent.length; i++) {
        var newSpan = document.createElement("span");
        var newContent = document.createTextNode(arrContent[i]);
        newSpan.className = arrClassName[i];
        newSpan.appendChild(newContent);
        newDiv.appendChild(newSpan);
    }
    main.appendChild(newDiv);
};
addUser.onclick = function () {
    //      ---- create a new User -----
    console.clear();
    dataCraft.push(newData);
    console.log(dataCraft);
    NewDiv();
    console.log("%cthere now ".concat(main.children.length, " client"), "color:red; font-size: 2rem;");
    counter++;
};
var changeName = document.getElementById("changeName");
changeName.onclick = function () {
    console.log(userIdSelect);
    var newName = prompt("ضع الاسم الجديد");
    dataCraft.map(function (data) {
        console.log(userIdSelect);
    });
    console.log(newName);
};
