const main: HTMLElement | null = document.getElementById("main");
const addUser: HTMLElement | null = document.getElementById("addUser");
let userNumSelect: number = 0;
let counter: string | number | any =
    main!.children.length < 0 ? main!.children.length : 0;
const arrContent: [string, number, number] | any = ["عميل جديد", 0, 0];
const arrClassName: string[] = ["user", "mony", "gold"];
const newData: Object = {
    id: 0,
    data: {
        name: arrContent[0],
        mony: 0,
        gold: 0,
    },
};

if (localStorage.userIdSelect) {
    console.log("There userIdSelect: ", localStorage.userIdSelect);
} else {
    localStorage.setItem("userIdSelect", "0");
}
let userIdSelect;

const dataCraft: Object[] | any = [
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

const start = () => {
    for (var i = 0; i < dataCraft.length; i++) {
        const newDiv = document.createElement("div");

        newDiv.className = "tab";
        newDiv.dataset.lala = String(i);
        counter++;

        newDiv.onclick = () => {
            let lala = newDiv.dataset.lala;

            console.log(lala);

            document.getElementById("user-show")!.style.display = "flex";
        };

        console.log(i);
        for (let j = 0; j < 3; j++) {
            console.log(j);

            const newSpan = document.createElement("span");
            const newContent = document.createTextNode(
                `${Object.values(dataCraft[i].data)[j]}`
            );
            newSpan.appendChild(newContent);
            newSpan.className = arrClassName[j];
            newDiv.appendChild(newSpan);
        }
        main!.appendChild(newDiv);
    }
};
start();

const changePage = (btn) => {
    document.getElementById("user-show")!.style.display = "none";

    let mainChild: HTMLElement | any = document.body.children;
    for (let child of mainChild) {
        child!.classList.remove("df");
    }
    const secIds = ["home", "invoices", "bonds"];

    let idNum = 0;
    secIds.map((id) => {
        if (btn.dataset.id == id) {
            document.body.children[idNum].className = "df";
        }
        idNum++;
    });
    idNum = 0;
};

const NewDiv = () => {
    const newDiv = document.createElement("div");

    newDiv.className = "tab";
    newDiv.dataset.lala = String(counter);

    newDiv.onclick = () => {
        let lala = newDiv.dataset.lala;
        userIdSelect += lala;

        console.log(userIdSelect);

        document.getElementById("user-show")!.style.display = "flex";
    };

    for (let i = 0; i < arrContent.length; i++) {
        const newSpan = document.createElement("span");
        const newContent = document.createTextNode(arrContent[i]);
        newSpan.className = arrClassName[i];
        newSpan.appendChild(newContent);
        newDiv.appendChild(newSpan);
    }

    main!.appendChild(newDiv);
};

addUser!.onclick = () => {
    //      ---- create a new User -----
    console.clear();

    dataCraft.push(newData);
    console.log(dataCraft);

    NewDiv();

    console.log(
        `%cthere now ${main!.children.length} client`,
        "color:red; font-size: 2rem;"
    );

    counter++;
};

const changeName = document.getElementById("changeName");

changeName!.onclick = () => {
    console.log(userIdSelect);
    let newName = prompt("ضع الاسم الجديد");

    dataCraft.map((data) => {
        console.log(userIdSelect);
    });

    console.log(newName);
};
