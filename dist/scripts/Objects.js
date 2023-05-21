class Objects {
    constructor(main) {
        this.main = main;
        this.counter =
            this.main.children.length < 0 ? this.main.children.length : 0;
    }

    newDiv(contents, classes) {
        var newDiv = document.createElement("div");

        for (var i = 0; i < contents.length; i++) {
            var newSpan = document.createElement("span");
            var newContent = document.createTextNode(contents[i]);
            newSpan.className = classes[i];
            newSpan.appendChild(newContent);
            newDiv.appendChild(newSpan);
        }

        newDiv.className = "tab";
        newDiv.dataset.lala = String(this.counter);

        newDiv.onclick = () => {
            var lala = newDiv.dataset.lala;
            userShow.style.display = "flex";
            var Uname = newDiv.children[0].textContent;
            userShow.children[1].children[0].textContent = Uname;
        };

        this.main.appendChild(newDiv);
    }

    homeFunc() {
        inputChangeName.addEventListener("keyup", (event) => {
            if (event.key == "Enter") {
                console.log(inputChangeName.value);
                var arrContent = [inputChangeName.value, 0, 0];
                var arrClassName = ["user", "mony", "gold"];

                this.newDiv(arrContent, arrClassName);
                namePropmt.style.display = "none";

                console.log(
                    "there now ".concat(this.main.children.length, " client")
                );
                this.counter++;
            }
        });

        changeName.onclick = () => (namePropmt.style.display = "flex");
    }

    add(addBtn) {
        switch (addBtn) {
            case addUser:
                addUser.onclick = () => {
                    namePropmt.style.display = "flex";

                    btnChangeName.onclick = () => {
                        var arrContent = [inputChangeName.value, 0, 0];
                        var arrClassName = ["user", "mony", "gold"];
                        namePropmt.style.display = "none";

                        this.newDiv(arrContent, arrClassName);

                        console.log(
                            "there now ".concat(
                                this.main.children.length,
                                " client"
                            )
                        );
                        this.counter++;
                    };
                    namePropmt.children[0].onclick = () =>
                        (namePropmt.style.display = "none");
                };
                break;
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            case addInvoices:
                addInvoices.onclick = () => {
                    invoicesADD.style.display = "flex";
                    btnChangeInvoices.onclick = () => {
                        var arrClassName = ["user", "mony", "gold", "user"];
                        var arrContent = [
                            inputInvoicesId.value,
                            inputInvoicesGold.value,
                            inputInvoicesInvoic.value,
                            inputInvoicesCreated.value,
                        ];

                        this.newDiv(arrContent, arrClassName);
                        invoicesADD.style.display = "none";
                    };
                    invoicesADD.children[0].onclick = () =>
                        (invoicesADD.style.display = "none");
                };
                break;
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            case addBonds:
                addBonds.onclick = () => {
                    bondsADD.style.display = "flex";
                    btnChangeBonds.onclick = () => {
                        var arrClassName = ["user", "mony", "gold", "user"];
                        var arrContent = [
                            inputBondsId.value,
                            inputBondsGold.value,
                            inputBondsInvoic.value,
                            inputBondsCreated.value,
                        ];
                        this.newDiv(arrContent, arrClassName);

                        bondsADD.style.display = "none";
                    };
                    bondsADD.children[0].onclick = () =>
                        (bondsADD.style.display = "none");
                };
                break;
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            default:
                console.log(addBtn);
                console.log("addInvoices: ", addBtn == addInvoices);
                console.log("addBonds: ", addBtn == addBonds);
        }
    }

    changePage(btn) {
        btn.onclick = () => {
            userShow.style.display = "none";
            var bodyChild = document.body.children;
            for (
                var _i = 0, bodyChild_1 = bodyChild;
                _i < bodyChild_1.length;
                _i++
            ) {
                var child = bodyChild_1[_i];
                child.classList.remove("open");
            }
            var secIds = ["home", "invoices", "bonds"];
            var idNum = 0;
            secIds.map((id) => {
                if (btn.dataset.id == id) {
                    document.body.children[idNum].className = "open";
                }
                idNum++;
            });
            idNum = 0;
        };
    }
}
