type PagesNames = "app";

type DB_Invoice_Or_Bouds = {
    id: number;
    money: number;
    gold: number;
    created_at: Date;
};

type DB_Invoice = DB_Invoice_Or_Bouds;
type DB_Bouds = DB_Invoice_Or_Bouds;

type DB_User = {
    id: number;
    name: string;
    money: number;
    gold: number;
    f_total: string;
    m_total: string;
};
