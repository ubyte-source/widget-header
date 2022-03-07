# Documentation widget-header

Widget Javascript Header is a library used to create an header for your web page.

## Usage

So the basic setup looks something like this:

```

let header = new Header();

header.setUrl('Application base URL'); // When click title
header.setTitle('Application name');

let profile = header.getProfile(),
    profile_burger = profile.getMenu();
profile.setUsername('my@email.com');
// profile.setImage(<uri>);

  let account_label = 'My Account',
      account = profile_burger.addItem(account_label, 'account_circle');
  account.href = 'The uri to the profile detail'


profile_burger.addItem('Logout', 'exit_to_app', function () {
  let xhr = new WXmlHttpRequest(),
      api = 'uri to a logout action'

  xhr.setRequestUrl(api);
  xhr.setCallbackSuccess(function (response) {
      if (response.hasOwnProperty('return_url'))
        document.location.href = response.return_url;
  });
  xhr.request();
});

document.appendChild(header.out());

```

## Structure

library:
- [window.Header](https://github.com/energia-source/widget-header/tree/main/lib)
- [window.Header.Profile](https://github.com/energia-source/widget-header/tree/main/lib)
- [window.Header.Menu](https://github.com/energia-source/widget-header/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-header/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-header/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details