function transformUppercase(_val) {
    return _val.toUpperCase();
}

const elNamaPengguna = document.getElementById('namaPengguna');
elNamaPengguna.addEventListener('keyup', function() {
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});