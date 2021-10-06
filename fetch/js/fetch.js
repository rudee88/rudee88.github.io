function LoadUser() {
  const url = 'https://randomuser.me/api/';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const fn = document.getElementById('firstName');
      const ln = document.getElementById('lastName');
      const phone = document.getElementById('phone');
      const img = document.getElementById('userImg');

      fn.innerHTML = data.results[0].name.first;
      ln.innerHTML = data.results[0].name.last;
      phone.innerHTML = data.results[0].phone;
      img.src = data.results[0].picture.large;
    });
}

const elLoadUser = document.getElementById('getRandomUser');
elLoadUser.addEventListener('click', function () {
  LoadUser();
});

const elLoadMultipleUsers = document.getElementById('getMultipleUser');
elLoadMultipleUsers.addEventListener('click', function () {
  const userCount = document.getElementById('userCount');
  LoadMultipleUsers(userCount.value);
});

function LoadMultipleUsers(userCount) {
  const url = 'https://randomuser.me/api/?results=' + userCount;
  let temp = '';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const allUsers = document.getElementById('allUsers');

      for (let i = 0; i < data.results.length; i++) {
        const fn = '<div>' + data.results[i].name.first + '</div>';
        const ln = '<div>' + data.results[i].name.last + '</div>';
        const phone = '<div>' + data.results[i].phone + '</div>';
        const img = '<img src="' + data.results[i].picture.large + '">';

        temp = temp + fn + ln + phone + img;
      }

      allUsers.innerHTML = temp;
    });
}

const elLoadGender = document.getElementById('getGenderUsers');
elLoadGender.addEventListener('click', function () {
  console.log('Get gender load!');
  const userCount = document.getElementById('userFemaleCount');

  const gender = document.getElementById('userGender');
  console.log('Selected Gender: ' + gender.value);

  loadGender(gender.value, userCount.value);
});

function loadGender(gender, userCount) {
  const url =
    'https://randomuser.me/api/?results=' + userCount + '&gender=' + gender;
  let temp = '';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const allGenderUsers = document.getElementById('allGenderUsers');

      for (let i = 0; i < data.results.length; i++) {
        const fn = '<div>' + data.results[i].name.first + '</div>';
        const ln = '<div>' + data.results[i].name.last + '</div>';
        const phone = '<div>' + data.results[i].phone + '</div>';
        const img = '<img src="' + data.results[i].picture.large + '">';
        const gdr = '<div>' + data.results[i].gender + '</div>';

        temp = temp + fn + ln + phone + gdr + img;
      }

      allGenderUsers.innerHTML = temp;
    });
}
