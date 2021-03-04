var token;
fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
    method: 'GET',
    headers: {
        'api-token': 'kXUbE60bF87gEnWhuhNTGr9l_n3GykIou0DM5e63wIDzml5XOAU4uapzW_VZFszWkTs',
        'user-email': 'haygrouve@gmail.com',
        Accept: 'application/json'
    }
})
    .then(function (res) { return res.json(); })
    .then(function (data) { return (token = data['auth_token']); })["catch"](function (err) { return console.log(err); });
function loadCountry() {
    fetch('https://www.universal-tutorial.com/api/countries/', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json'
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var domCountry = document.querySelector('#country');
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var el = data_1[_i];
            var element = document.createElement('option');
            element.textContent = el['country_name'];
            domCountry.appendChild(element);
        }
        printInfo();
    })["catch"](function (err) { return console.log(err); });
}
function loadState() {
    var domCountry = document.querySelector('#country')
        .value;
    var url = 'https://www.universal-tutorial.com/api/states/' + domCountry;
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json'
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var domState = document.querySelector('#state');
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var el = data_2[_i];
            var element = document.createElement('option');
            element.textContent = el['state_name'];
            domState.appendChild(element);
        }
        printInfo();
    })["catch"](function (err) { return console.log(err); });
}
function loadCity() {
    var domCity = document.querySelector('#state').value;
    var url = 'https://www.universal-tutorial.com/api/cities/' + domCity;
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json'
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var domElement = document.querySelector('#city');
        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
            var el = data_3[_i];
            var element = document.createElement('option');
            element.textContent = el['city_name'];
            domElement.appendChild(element);
        }
        printInfo();
    })["catch"](function (err) { return console.log(err); });
}
var printInfo = function () {
    var domCountry = document.querySelector('#country')
        .value;
    var domState = document.querySelector('#state').value;
    var domCity = document.querySelector('#city').value;
    var domInfo = document.querySelector('#info');
    domInfo.innerHTML = "{" + domCountry + ", " + domState + ", " + domCity + "}";
};
