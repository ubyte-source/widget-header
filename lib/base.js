(function (window) {

    'use strict';

    class Menu {

        constructor(profile) {
            this.profile = profile;
            this.elements = {};
        }

        getProfile() {
            return this.profile;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            this.elements.container = document.createElement('ul');
            this.elements.container.className = 'submenu';
            return this.elements.container;
        }
        addItem(text, material, func) {
            let li = document.createElement('li'), a = document.createElement('a'), node = document.createTextNode(text), i = this.getProfile().getHeader().getIcon(material);

            a.appendChild(i);
            a.appendChild(node);

            if (typeof func === 'function') a.addEventListener('click', func.bind(this));

            li.appendChild(a);
            this.getContainer().appendChild(li);

            return a;
        }
        out() {
            return this.getContainer();
        }
        handleEvent(event) {
            let attribute = Header.closestAttribute(event.target, Header.handle());
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }
        show() {
            this.getContainer().classList.add('show');
            return this;
        }
        hide() {
            this.getContainer().classList.remove('show');
            return this;
        }
        status() {
            return this.getContainer().classList.contains('show');
        }
    }

    class Profile {

        static person() {
            return 'PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTUwLjAwMDAwMHB0IiBoZWlnaHQ9IjE1MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDE1MC4wMDAwMDAgMTUwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTUwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTU0NSAxNDgwIGMtMjU5IC03NSAtNDU0IC0yNzIgLTUyNiAtNTMyIC0yNyAtOTUgLTI3IC0zMDEgMCAtMzk2IDczCi0yNjMgMjcwIC00NjAgNTMzIC01MzMgOTUgLTI3IDMwMSAtMjcgMzk2IDAgMjYzIDczIDQ2MCAyNzAgNTMzIDUzMyAyNyA5NSAyNwozMDEgMCAzOTYgLTUwIDE4MiAtMTUwIDMyMSAtMzE3IDQzOCAtNDYgMzIgLTE0MSA3NSAtMjE2IDk1IC05MSAyNSAtMzE0IDI1Ci00MDMgLTF6IG0zODQgLTI0NSBjMzAgLTggNjMgLTIzIDc0IC0zNCAxOSAtMTkgMTkgLTIxIDMgLTQ1IC0yNSAtMzkgLTk3IC03MAotMjU2IC0xMTAgLTE2NSAtNDEgLTIyMyAtNjAgLTIyNyAtNzMgLTMgLTkgNTAgLTIzIDIyNyAtNjMgMjA5IC00NyAyNzEgLTgyCjI3MyAtMTU0IDIgLTc2IC03MSAtMTE3IC0zMDMgLTE2NyAtMTU3IC0zNSAtMjAwIC00NyAtMjAwIC01OSAwIC0xMCA2MSAtMjgKMjQ2IC03NSAxMzYgLTM0IDIwNyAtNjQgMjM3IC05OCAxOSAtMjIgMjAgLTI3IDkgLTQzIC0xOCAtMjggLTEzOSAtNjQgLTIwNwotNjMgbC0zMCAxIDM1IDEwIGMxOSA1IDYxIDE3IDkzIDI1IDMxIDkgNTcgMjEgNTcgMjggMCAxNCAtODAgMzggLTIyMCA2NgotMTk4IDM4IC0yNTkgNTggLTMwNCAxMDAgLTI4IDI3IC0yOCA5MSAwIDExOCA0MyA0MCA1OCA0NCAzMzkgMTEyIDUwIDEyIDk5CjI2IDEwOSAzMSAxNyAxMCAxOCAxMSAzIDIwIC0xNyA5IC04NSAyNyAtMjU1IDY3IC0xMTkgMjggLTE3MyA1MiAtMjAwIDg2IC0yOAozNSAtMjggNjUgLTEgOTkgMzcgNDcgOTggNjkgMzA5IDExMSAxMzAgMjcgMjEzIDUwIDIxNyA2MiA0IDEyIC01NSAzNiAtMTM0CjUzIC0yOSA3IC01MyAxNCAtNTMgMTcgMCA3IDk2IC02IDE1OSAtMjJ6Ii8+CjwvZz4KPC9zdmc+';
        }

        constructor(header) {
            this.header = header;

            this.elements = {};
            this.elements.menu = new window.Header.Menu(this);
        }

        getHeader() {
            return this.header;
        }
        getMenu() {
            return this.elements.menu;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let username = this.getUsername(), image = this.getImage(), menu = this.getMenu().out();
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'inline';
            this.elements.container.appendChild(username);
            this.elements.container.appendChild(image);
            this.elements.container.appendChild(menu);
            this.elements.container.setAttribute(Header.handle(), ':show');
            this.elements.container.addEventListener('click', this.getMenu(), false);
            return this.elements.container;
        }
        getUsername() {
            if (this.elements.hasOwnProperty('username')) return this.elements.username;
            this.elements.username = document.createElement('span');
            this.elements.username.className = 'username';
            return this.elements.username;
        }
        setUsername(text) {
            let node = document.createTextNode(text);
            this.getUsername().appendChild(node);
            return this;
        }
        getImage() {
            if (this.elements.hasOwnProperty('image')) return this.elements.image;
            this.elements.image = document.createElement('img');
            this.elements.image.className = 'image';
            this.elements.image.setAttribute('src', 'data:image/svg+xml;base64,' + this.constructor.person());
            return this.elements.image;
        }
        setImage(src) {
            if (typeof src !== 'string'
                || src.length < 4) return this;

            this.getImage().setAttribute('src', src);
            return this;
        }
        out() {
            return this.getContainer();
        }
    }

    class Header {

        static handle() {
            return 'data-handle-event';
        }

        constructor() {
            this.url = String.fromCharCode(47);
            this.elements = {};
            this.elements.profile = new window.Header.Profile(this);
        }

        getUrl() {
            return this.url;
        }
        setUrl(url) {
            this.url = url;
            return this;
        }
        getProfile() {
            return this.elements.profile;
        }
        getIcon(name) {
            let icon = document.createElement('i');
            icon.className = 'material-icons';
            icon.innerText = name;
            return icon;
        }
        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            this.elements.title = document.createElement('h6');
            this.elements.title.className = 'title';
            return this.elements.title;
        }
        setTitle(text) {
            let a = document.createElement('a'), node = document.createTextNode(text);
            a.href = this.getUrl();
            a.className = 'title-text ellipsis';
            a.appendChild(node);
            this.getTitle().appendChild(a);
            return this;
        }
        getRow() {
            if (this.elements.hasOwnProperty('header')) return this.elements.header;
            let left = this.getLeft(), right = this.getRight();
            this.elements.header = document.createElement('header');
            this.elements.header.className = 'pure-g';
            this.elements.header.appendChild(left);
            this.elements.header.appendChild(right);
            return this.elements.header;
        }
        getLeft() {
            if (this.elements.hasOwnProperty('left')) return this.elements.left;
            let title = this.getTitle();
            this.elements.left = document.createElement('div');
            this.elements.left.className = 'pure-u-6-24';
            this.elements.left.appendChild(title);
            return this.elements.left;
        }
        getRight() {
            if (this.elements.hasOwnProperty('right')) return this.elements.right;
            let profile = this.getProfile().out();
            this.elements.right = document.createElement('div');
            this.elements.right.className = 'pure-u-18-24';
            this.elements.right.appendChild(profile);
            return this.elements.right;
        }
        close(event) {
            let profile = this.getProfile(), menu = profile.getMenu(), attribute = this.constructor.closestAttribute(event.target, this.constructor.handle(), true);
            if (attribute !== profile.getContainer() && menu.status()) menu.hide();
        }
        out() {
            return this.getRow();
        }
        handleEvent(event) {
            let attribute = this.constructor.closestAttribute(event.target, this.constructor.handle());
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }
        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }
    }

    window.Header = Header;
    window.Header.Profile = Profile;
    window.Header.Menu = Menu;

})(window);