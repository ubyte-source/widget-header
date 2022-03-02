# Documentation widget-header

> Widget Javascript Header is a library used to create an header for your web page.

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

if (window.page.checkPolicy('iam/user/view/upsert') && window.page.checkPolicy('iam/user/action/update/me')) {
  let account_label = window.page.getTranslate('header.buttons.my_account'),
      account = profile_burger.addItem(account_label, 'account_circle');
  account.href = window.page.iam
               + 'iam/user/upsert'
               + String.fromCharcode(47)
               + '<key>';
}

profile_burger.addItem('Logout', 'exit_to_app', function () {
  let xhr = new WXmlHttpRequest(),
      api = '/api/sso/user/gateway/iam/iam/user/logout'
          + String.fromCharcode(63)
          + 'timestamp'
          + String.fromCharcode(61)
          + Date.now();

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

- library:
    - [window.Chat](https://github.com/energia-source/widget-chat#class-windowchat-usable-methods)
    - [window.Chat.Body](https://github.com/energia-source/widget-chat#class-windowchatbody-usable-methods)
    - [window.Chat.Body.Picture](https://github.com/energia-source/widget-chat#class-windowchatbodypicture-usable-methods)
    - [window.Chat.Body.Picture.Initials](https://github.com/energia-source/widget-chat#class-windowchatbodypictureinitials-usable-methods)
    - [window.Chat.Body.Message](https://github.com/energia-source/widget-chat#class-windowchatbodymessage-usable-methods)
    - [window.Chat.Body.Message.Line](https://github.com/energia-source/widget-chat#class-windowchatbodymessageline-usable-methods)
    - [window.Chat.Loader](https://github.com/energia-source/widget-chat#class-windowchatloader-usable-methods)


## ***Class window.Header usable methods***

##### `static handle()`

It returns a string.

 * **Returns:** The handle() method returns the string 'data-handle-event'.

##### `constructor()`

The constructor function creates an object that has a url property and an elements property.

The elements property has a profile property that is an instance of the Profile class

##### `getUrl()`

Get the URL of the current page

 * **Returns:** The url property of the object.

##### `setUrl(url)`

Set the URL for the REST API

 * **Parameters:** `url` — The URL of the file to be downloaded.
 * **Returns:** The `setUrl` method returns the `this` object.

##### `getProfile()`

Get the profile element

 * **Returns:** The profile element.

##### `getIcon(name)`

Create an HTML element with the class `material-icons` and the innerText of the `name` parameter

 * **Parameters:** `name` — The name of the icon.
 * **Returns:** The icon that was created.

##### `getTitle()`

Create a new HTML element with the tag "h6" and the class "title"

 * **Returns:** The title element.

##### `setTitle(text)`

* Create a link element with the text of the current URL. * Append the link to the title element. * Return the current instance of the page object

 * **Parameters:** `text` — The text to be displayed in the title bar.
 * **Returns:** The `setTitle` method returns the `this` object.

##### `getRow()`

*Create a header element with a left and right column.*

 * **Returns:** The header row.

##### `getLeft()`

Create a div with the class name "pure-u-6-24" and append the title to it

 * **Returns:** The title of the question.

##### `getRight()`

*Get the right element of the page.*

 * **Returns:** The right side of the page.

##### `close(event)`

If the user clicks outside of the menu, hide the menu

 * **Parameters:** `event` — The event object that was passed to the handler.

##### `out()`

Get the row of the current cell

 * **Returns:** The row that was just created.

##### `handleEvent(event)`

If the event target has a class attribute that matches the handle() function, then execute the function

 * **Parameters:** `event` — The event object that was passed to the event handler.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the closest attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML source code.
 * **Returns:** The closest attribute.

## ***Class window.Header.Profile usable methods***

##### `static person()`

The function returns a string containing the JavaScript code to create a person object

 * **Returns:** The person() function returns a base64 encoded string.

##### `constructor(header)`

Create a new instance of the Profile class and pass it the header instance

 * **Parameters:** `header` — The header object that the menu is being created for.

##### `getHeader()`

Get the object Header

 * **Returns:** The object Header.

##### `getMenu()`

Get the menu element

 * **Returns:** The menu element.

##### `getContainer()`

Create a container element that contains the username, image, and menu

 * **Returns:** The container element.

##### `getUsername()`

Create a span element with the class of "username" if one doesn't already exist

 * **Returns:** The username span element.

##### `setUsername(text)`

*Create a text node and append it to the username element.*

 * **Parameters:** `text` — The text to be displayed in the username field.
 * **Returns:** The `setUsername` method returns the `this` object.

##### `getImage()`

Create an image element and set its src attribute to a base64 encoded SVG string

 * **Returns:** The image element.

##### `setImage(src)`

Set the image source of the image element

 * **Parameters:** `src` — The URL of the image.
 * **Returns:** The object.

##### `out()`

Get the container of the current cell

 * **Returns:** The container element.

## ***Class window.Header.Menu usable methods***

##### `constructor(profile)`

Create a new JavaScript object with a profile property

 * **Parameters:** `profile` — The name of the profile to use.

##### `getProfile()`

Get the profile of the current user

 * **Returns:** The profile object.

##### `getContainer()`

*Get the container element for the submenu. If it doesn't exist, create it.*

The function starts by checking if the container element exists. If it does, it returns it. If it doesn't, it creates it

 * **Returns:** The container element.

##### `addItem(text, material, func)`

Create a list item with an anchor tag and a text node

 * **Parameters:**
   * `text` — The text that will be displayed in the menu.
   * `material` — The material icon name.
   * `func` — A function that will be called when the link is clicked.
 * **Returns:** The anchor element.

##### `out()`

Get the container of the current cell

 * **Returns:** The container element.

##### `handleEvent(event)`

A JavaScript event handler.

 * **Parameters:** `event` — The event object that was passed to the function.
 * **Returns:** The `handleEvent` method is being returned.

##### `show()`

Add the class 'show' to the container of the component

 * **Returns:** The element.

##### `hide()`

Remove the class 'show' to the container of the component

 * **Returns:** The element.

##### `status()`

Returns a boolean indicating whether the modal is currently shown

 * **Returns:** The method returns a boolean value.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details