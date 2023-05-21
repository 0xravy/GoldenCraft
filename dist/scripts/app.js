var // Home
    changeName = document.getElementById("changeName"),
    namePropmt = document.getElementById("namePropmt"),
    btnChangeName = document.getElementById("btnChangeName"),
    inputChangeName = document.getElementById("inputChangeName"),
    btnInvoices = document.getElementById("btnInvoices"),
    btnBonds = document.getElementById("btnBonds"),
    userShow = document.getElementById("userShow"),
    // Main
    mainHome = document.getElementById("mainHome"),
    mainInvoices = document.getElementById("mainInvoices"),
    mainBonds = document.getElementById("mainBonds"),
    // Add
    addUser = document.getElementById("addUser"),
    addInvoices = document.getElementById("addInvoices"),
    addBonds = document.getElementById("addBonds"),
    // invoices
    btnInvoicesHome = document.getElementById("btnInvoicesHome"),
    invoicesADD = document.getElementById("invoicesADD"),
    invoicesCon = document.getElementById("invoicesCon"),
    inputInvoicesId = document.getElementById("inputInvoicesId"),
    inputInvoicesGold = document.getElementById("inputInvoicesGold"),
    inputInvoicesInvoic = document.getElementById("inputInvoicesInvoic"),
    inputInvoicesCreated = document.getElementById("inputInvoicesCreated"),
    btnChangeInvoices = document.getElementById("btnChangeInvoices"),
    // Bonds
    btnBondsHome = document.getElementById("btnBondsHome"),
    bondsADD = document.getElementById("bondsADD"),
    bondsCon = document.getElementById("bondsCon"),
    inputBondsId = document.getElementById("inputBondsId"),
    inputBondsGold = document.getElementById("inputBondsGold"),
    inputBondsInvoic = document.getElementById("inputBondsInvoic"),
    inputBondsCreated = document.getElementById("inputBondsCreated"),
    btnChangeBonds = document.getElementById("btnChangeBonds"),
    // Lala
    btnShowMore = document.getElementById("btnShowMore"),
    btnSearch = document.getElementById("btnSearch");
// =======================================================

// HOME
const home = new Objects(mainHome);
home.add(addUser);
home.changePage(btnInvoices);
home.changePage(btnBonds);
home.homeFunc();

// INVOICES
const invoices = new Objects(mainInvoices);
invoices.add(addInvoices);
invoices.changePage(btnInvoicesHome);

// BONDS
const bonds = new Objects(mainBonds);
bonds.add(addBonds);
bonds.changePage(btnBondsHome);
