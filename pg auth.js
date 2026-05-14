// Function to check if user is blocked
async function checkUserStatus(userEmail) {
    const response = await fetch('./js/blocked-list.json');
    const data = await response.json();
    
    if (data.blockedEmails.includes(userEmail)) {
        alert("ACCESS DENIED: This account has been blocked by Kuda Mewa Construction.");
        window.location.href = "https://google.com"; // Kick them out
        return false;
    }
    return true;
}

// 2-Second Gate logic
window.onload = () => {
    setTimeout(() => {
        const modal = document.getElementById('auth-modal');
        modal.style.display = 'flex';
    }, 2000);
};

// Simulation of Gmail Login
function handleGmailLogin() {
    // In a real setup, this is where Firebase/Google Auth returns the email
    const simulatedEmail = prompt("Enter your Gmail for 6-digit code verification:");
    
    checkUserStatus(simulatedEmail).then(isAllowed => {
        if (isAllowed) {
            document.getElementById('auth-modal').style.display = 'none';
            alert("Verification code sent to " + simulatedEmail);
        }
    });
}
