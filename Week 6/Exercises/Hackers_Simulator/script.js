function createBlinkingDots(baseMessage, Duration) {
    return new Promise((resolve, reject) => {
        let dotcount = 0;
        const message = document.createElement("div");
        document.body.appendChild(message);

        let interval = setInterval(() => {
            let dots = ".".repeat(dotcount % 4);
            message.textContent = `${baseMessage}${dots}`;
            dotcount++;
        }, 500);

        setTimeout(() => {
            clearInterval(interval);
            message.textContent = `${baseMessage}...`;
            resolve(baseMessage); // The Promise still resolves, but the returned value is undefined if we use resolve() no value in bracket.
        }, Duration);
    })
}

async function hack1() {
    return createBlinkingDots("Initailizing Hacking", 3000);
}
async function hack2() {
    return createBlinkingDots("Reading Your Files", 4000);
}
async function hack3() {
    return createBlinkingDots("Password Files Detected", 5000);
}
async function hack4() {
    return createBlinkingDots("Sending All Passwords & Personal Files To Server", 7000);
}
async function hack5() {
    return createBlinkingDots("Cleaning Up", 7000);
}

async function main() {
    let result = await hack1();
    console.log(result); // Using resolve(baseMessage); returns the message, so await can capture it otherwise the returned value is undefined
    await hack2();
    await hack3();
    await hack4();
    await hack5();
}

main()
