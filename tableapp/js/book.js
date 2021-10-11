const bookNowBtn = document.getElementById('bookNow');
bookNowBtn.addEventListener('click', function () {
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
  let url =
    'https://api.sheety.co/0147939e4fd694bb5d591f2eddf97947/bookingApp/bookings';
  let body = {
    booking: {
      name: userName,
      email: userEmail,
      pax: userPax,
      remarks: userRemarks,
    },
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.booking);
      alert(json.booking.name + ' added in the list');
    });
}
