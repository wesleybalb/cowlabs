export default function SetUserLoged() {
  const user = JSON.parse(localStorage.getItem("LogedUser"));
  const defaultUser = {
            "name": "WesleyBalbino",
            "realname": "Wesley Pinheiro Balbino",
            "tipo": "Admin",
            "curso": "Sistemas de Informação",
            "email": "202420243@unifoa.edu.br"
            }
    if (!user) {
        localStorage.setItem("LogedUser", JSON.stringify([defaultUser]));
    } else {
        console.log("User is already set:", user);
    }
 
}