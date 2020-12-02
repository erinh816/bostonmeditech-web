
function sendEmail() {
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "11953938ce7b5e",
    Password : "6fd8f69222b8bd",
    To : 'thomas.boot.ned@gmail.com',
    From : "is@bostonmeditech.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}