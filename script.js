//creating elements

// harek lai euta euta function le wrap garnu ra last ma call garnu
/*
async function just() {
    await act1();

    await act2();

    await act3();

    await act4();

}
just()
async function act1() {
    setTimeout(async () => {
        let create1 = document.createElement("p");
        create1.innerHTML = " &#9656;  Initializing hacking..."
        document.body.append(create1)
    }, 2000)
}
async function act2() {
    setTimeout(async () => {
        let create2 = document.createElement("p");
        create2.innerHTML = " &#9656; Found Id of Aaryan Aryal"
        document.body.append(create2)
    }, 2000)
}
async function act3() {
    setTimeout(async () => {
        let create3 = document.createElement("p");
        create3.innerHTML = " &#9656; Fetching account password"
        document.body.append(create3)
    }, 2000)
}
async function act4() {
    setTimeout(async () => {
        let create4 = document.createElement("p");

        create4.innerHTML = " &#9656; Want to see Aaryan password?"

        let create5 = document.createElement("button");

        create5.innerHTML = "Yes?";


        create5.addEventListener("click", click);
        function click() {
            document.body.append("You really thought it will work?, idiot")
        }

        document.body.append(create4)

        document.body.append(create5);
        document.getElementById("stop").style.display = "none";
    }, 2000)



}
*/
async function just() {
    await act1();
    await act2();
    await act3();
    await act4();
}

async function act1() {
    return new Promise(resolve => {
        setTimeout(() => {
            let create1 = document.createElement("p");
            create1.innerHTML = " &#9656;  Initializing hacking...,searching for people Id's"
            document.body.append(create1);
            resolve();
        }, 2000);
    });
}

async function act2() {
    return new Promise(resolve => {
        setTimeout(() => {
            let create2 = document.createElement("p");
            create2.innerHTML = " &#9656; Found Id of Aaryan Aryal"
            document.body.append(create2);
            resolve();
        }, 3000);
    });
}

async function act3() {
    return new Promise(resolve => {
        setTimeout(() => {
            let create3 = document.createElement("p");
            create3.innerHTML = " &#9656; Fetching Aaryan X account password"
            document.body.append(create3);
            resolve();
        }, 3000);
    });
}

async function act4() {
    return new Promise(resolve => {
        setTimeout(() => {
            let create4 = document.createElement("p");
            create4.innerHTML = " &#9656; Got it, Want to see Aaryan password?"
            document.body.append(create4);

            let create5 = document.createElement("button");
            create5.innerHTML = "Yes?";
            create5.addEventListener("click", click);

            function click() {
                document.body.append("You really thought it will work?, idiot")
            }

            document.body.append(create5);
            document.getElementById("stop").style.display = "none";

            resolve();
        }, 3000);
    });
}

just();

