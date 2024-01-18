let user = {
    username: "Stellina49",
    password: "12345",
    citta: "Torino",
    status: "online",
    accesso: false,

    doLogin: function(){

        this.status = "online";
        this.accesso = true;
        console.log("Login effettuato. Sei "+this.status);
    },

    doLogout(){
        this.status = "offline";
        this.accesso = false;
        console.log("Logout effettuato. Sei "+this.status);
    }
}

user.doLogin();
console.log(user.accesso);
console.log(user.status);

user.doLogout();
console.log(user.accesso);
console.log(user.status);