// Verification Logic for KUDA MEWA CONSTRUCTION
let generatedCode = "";

// 1. Show the Auth Modal after 2 seconds
window.onload = () => {
    setTimeout(() => {
        const modal = document.getElementById('auth-modal');
        if (modal) modal.style.display = 'flex';
    }, 2000);
};

// 2. Handle Gmail Sign-up (Simulation)
async function handleGmailLogin() {
    const email = prompt("Enter your Gmail address:");
    
    if (email && email.includes("@gmail.com")) {
        // Check if the user is blocked
        const isBlocked = await checkBlockedStatus(email);
        if (isBlocked) {
            alert("ACCESS DENIED: This account has been blocked.");
            window.location.href = "https://google.com";
            return;
        }

        // Generate a random 6-digit code
        generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        alert("A 6-digit verification code has been sent to " + email + "\n(Simulated Code: " + generatedCode + ")");
        
        verifyCode();
    } else {
        alert("Please enter a valid Gmail address.");
    }
}

// 3. Verify the 6-digit code
function verifyCode() {
    const userCode = prompt("Enter the 6-digit code received:");
    
    if (userCode === generatedCode) {
        alert("Verification Successful. Welcome to Kuda Mewa Construction.");
        document.getElementById('auth-modal').style.display = 'none';
    } else {
        alert("Invalid code. Please try again.");
        handleGmailLogin();
    }
}

// 4. Block Account Logic
async function checkBlockedStatus(email) {
    // You can update this list manually in your code or fetch from a JSON file
    const blockedList = ["baduser@gmail.com", "spammer@gmail.com"];
    return blockedList.includes(email.toLowerCase());
}
