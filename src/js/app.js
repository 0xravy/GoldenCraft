var // Home
    btnHome = document.getElementById("btnHome"),
    changeName = document.getElementById("changeName"),
    btnChangeName = document.getElementById("btnChangeName"),
    inputChangeName = document.getElementById("inputChangeName"),
    btnInvoices = document.getElementById("btnInvoices"),
    btnBonds = document.getElementById("btnBonds"),
    userShow = document.getElementById("userShow"),
    searchUsersInput = document.getElementById("searchUsersInput"),
    searchUsersButton = document.getElementById("searchUsersButton"),
    userSelName = document.getElementById("userSelName"),
    // Main
    mainHome = document.getElementById("mainHome"),
    mainInvoices = document.getElementById("mainInvoices"),
    mainBonds = document.getElementById("mainBonds"),
    // Add
    addUser = document.getElementById("addUser"),
    addInvoices = document.getElementById("addInvoices"),
    addBonds = document.getElementById("addBonds"),
    // invoices
    invoicesADD = document.getElementById("invoicesADD"),
    invoicesCon = document.getElementById("invoicesCon"),
    inputInvoicesNum = document.getElementById("inputInvoicesNum"),
    inputInvoicesGold = document.getElementById("inputInvoicesGold"),
    inputInvoicesInvoic = document.getElementById("inputInvoicesInvoic"),
    inputInvoicesCreated = document.getElementById("inputInvoicesCreated"),
    btnChangeInvoices = document.getElementById("btnChangeInvoices"),
    searchInvoicesInput = document.createElement("searchInvoicesInput"),
    searchInvoicesButton = document.createElement("searchInvoicesButton"),
    // Bonds
    bondsADD = document.getElementById("bondsADD"),
    bondsCon = document.getElementById("bondsCon"),
    inputBondsNum = document.getElementById("inputBondsNum"),
    inputBondsGold = document.getElementById("inputBondsGold"),
    inputBondsInvoic = document.getElementById("inputBondsInvoic"),
    inputBondsCreated = document.getElementById("inputBondsCreated"),
    btnChangeBonds = document.getElementById("btnChangeBonds"),
    searchBondsInput = document.createElement("searchBondsInput"),
    searchBondsButton = document.createElement("searchBondsButton"),
    // pageName
    pageName = document.getElementById("pageName");
// =======================================================

// HOME
const home = new Object(mainHome);
home.changePage(btnInvoices);
home.changePage(btnBonds);
home.addUser(addUser);
home.usersRead();

// INVOICES
const invoices = new Object(mainInvoices);
invoices.changePage(btnHome);
invoices.addTable(addInvoices);

// BONDS
const bonds = new Object(mainBonds);
bonds.changePage(btnHome);
bonds.addTable(addBonds);
