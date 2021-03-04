let token: string;

fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
  method: 'GET',
  headers: {
    'api-token':
      'kXUbE60bF87gEnWhuhNTGr9l_n3GykIou0DM5e63wIDzml5XOAU4uapzW_VZFszWkTs',
    'user-email': 'haygrouve@gmail.com',
    Accept: 'application/json',
  },
})
  .then((res) => res.json())
  .then((data) => (token = data['auth_token']))
  .catch((err) => console.log(err));

function loadCountry() {
  fetch('https://www.universal-tutorial.com/api/countries/', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let domCountry = document.querySelector('#country');
      for (const el of data) {
        let element = document.createElement('option');
        element.textContent = el['country_name'];
        domCountry.appendChild(element);
      }
      printInfo();
    })
    .catch((err) => console.log(err));
}
function loadState() {
  let domCountry = (<HTMLSelectElement>document.querySelector('#country'))
    .value;
  let url = 'https://www.universal-tutorial.com/api/states/' + domCountry;
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let domState = document.querySelector('#state');
      for (const el of data) {
        let element = document.createElement('option');
        element.textContent = el['state_name'];
        domState.appendChild(element);
      }
      printInfo();
    })
    .catch((err) => console.log(err));
}

function loadCity() {
  let domCity = (<HTMLSelectElement>document.querySelector('#state')).value;
  let url = 'https://www.universal-tutorial.com/api/cities/' + domCity;
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let domElement = document.querySelector('#city');
      for (const el of data) {
        let element = document.createElement('option');
        element.textContent = el['city_name'];
        domElement.appendChild(element);
      }
      printInfo();
    })
    .catch((err) => console.log(err));
}
const printInfo = () => {
  let domCountry = (<HTMLSelectElement>document.querySelector('#country'))
    .value;
  let domState = (<HTMLSelectElement>document.querySelector('#state')).value;
  let domCity = (<HTMLSelectElement>document.querySelector('#city')).value;
  let domInfo = <HTMLSelectElement>document.querySelector('#info');
  domInfo.innerHTML = `{${domCountry}, ${domState}, ${domCity}}`;
};
