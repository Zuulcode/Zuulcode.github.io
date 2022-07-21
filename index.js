let walletAdr = "0xF9A42a358353F516A610D2F8777A0C54f681Eafd";

function copy()
{
    navigator.clipboard.writeText(walletAdr);
    document.getElementsByClassName("addrText")[0].innerHTML = "Copied!";
    setTimeout(() => {
        document.getElementsByClassName("addrText")[0].innerHTML = walletAdr;
        return;
    }, 2000);
    return;
}

function load()
{
    document.getElementsByClassName("addrText")[0].innerHTML = walletAdr;
}

load();