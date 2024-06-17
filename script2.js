 // Obtém o nome e sobrenome do localStorage
 const user = JSON.parse(localStorage.getItem('currentUser'));
 if (user) {
     document.getElementById('userName').textContent = `${user.nome} ${user.sobrenome}`;
 } else {
     // Se não houver usuário no localStorage, redireciona para a página de login
     window.location.href = 'index.html';
 }