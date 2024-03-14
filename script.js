
	document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username.length < 4) {
        showMessage("El usuario debe tener al menos 4 caracteres.");
    } else if (password.length < 6 || password.length > 16) {
        showMessage("La contraseña debe tener entre 6 y 16 caracteres.");
    } else {
        
        showMessage("Inicio de sesión exitoso para " + username);
        
    }
});

function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
}