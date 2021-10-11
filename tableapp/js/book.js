const bookNowBtn = document.getElementById('bookNow');
bookNowBtn.addEventListener('click', function() {
    const userName = document.getElementById('userName');
    const userNameVal = userName.value;

    const userEmail = document.getElementById('userEmail');
    const userEmailVal = userEmail.value;

    const userPax = document.getElementById('userPax');
    const userPaxVal = userPax.value;

    const userRemarks = document.getElementById('userRemarks');
    const userRemarksVal = userRemarks.value;
    
    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName, userEmail, userPax, userRemarks) {
    console.log(userName);
    console.log(userEmail);
    console.log(userPax);
    console.log(userRemarks);
}