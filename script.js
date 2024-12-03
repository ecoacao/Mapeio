// Alternar entre Login e Cadastro
document.getElementById('toggle-form').addEventListener('click', function() {
    document.getElementById('auth-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Criar Conta';
});

document.getElementById('toggle-form-login').addEventListener('click', function() {
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('auth-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Entrar';
});
