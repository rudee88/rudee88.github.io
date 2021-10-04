function transformUppercase(_val) {
    return _val.toUpperCase();
}

const elNamaPengguna = document.getElementById('namaPengguna');
elNamaPengguna.addEventListener('keyup', function() {
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword() {
    const elKataLaluan = document.getElementById('kataLaluan');
    const pass_val = elKataLaluan.value;

    if(pass_val.length > 5) {
        alert('Password check OK!');
    } else {
        alert('Password to short!')
    }
}

const elKL = document.getElementById('kataLaluan');
elKL.onblur = checkPassword;