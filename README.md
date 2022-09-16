# vul-pubweb-components
We often brand integrated systems with the Libraries' public web theme header and/or footer. Historically, this has resulted in frustrating style bleed issues that require significant time investment to remedy despite our best efforts to minimize them.

This repo leverages [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) technologies to provide versions of the public web header and footer that are minimally affected by outside styles.

Additionally, navbar updates on the public web have necessitated applying the same update across any systems that use the same navbar; a tedious and time-consuming process. These public web components (PWC) build the navigation from a central JSON file, so a simple update to this file will propagate updates across all sites.

## Usage
### Bootstrap 3 vs Bootstrap 4
Two versions of the components are needed for a couple of reasons:
 * Bootstrap 4 updated the expected structure of its dropdown components
 * Bootstrap 4 also updated its styling

So use whichever version of Bootstrap the integrated system you're working with is already using. As for the question of which version to choose for integrated systems that don't utilize Bootstrap in the first place, choosing either version shouldn't matter, as they're both developed to be visually and functionally equivalent to the public web.

### Font Awesome
The PWC rely on Font Awesome (FA) for their icons. If the app you're adding the PWC to already uses Font Awesome, then you likely don't need to do anything. However, if the app doesn't, then a complementary CSS file is included to avoid pulling in the entire FA library:

```html
<head>
    <link rel="stylesheet" href="https://cdn.library.vanderbilt.edu/pwc/bootstrap3/dist/css/vul-pw-fontawesome.css">
</head>
```

### Header Components
To get started with the header components, include their CSS and JS files, along with the Source Sans Pro Google font:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdn.library.vanderbilt.edu/pwc/bootstrap3/dist/css/vul-pw-header.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700|Source+Sans+Pro:200,300,400,700&display=swap">
    </head>
    <body>  
        <!-- ... -->

        <script src="https://cdn.library.vanderbilt.edu/pwc/bootstrap3/dist/js/vul-pw-header.js"></script>

        <!-- Don't forget the emergency alerts! -->
        <script src="https://cdn.vanderbilt.edu/vu-www4/brandbar/emergency.js"></script>
        <script src="https://www.library.vanderbilt.edu/assets/js/heardEmergency.js"></script>
    </body>
</html>
```

#### `<vul-brandbar>`
To add the brandbar:

```html
<body>
    <vul-brandbar></vul-brandbar>
</body>
```

Yep, it's that easy!

**NOTE:** `<vul-brandbar>` is not encapsulated within a Shadow DOM in order to utilize Bootstrap's dropdown functionality.

#### `<vul-header>`
The header mainly serves as a container:

```html
<body>
    <vul-brandbar></vul-brandbar>
    <vul-header>
        <!-- Navigation and banner components will go here -->
    </vul-header>
</body>
```

#### `<vul-navigation>`

```html
<body>
    <vul-brandbar></vul-brandbar>
    <vul-header>
        <vul-navigation></vul-navigation>
    </vul-header>
</body>
```

By default, `<vul-navigation>` uses the Heard navbar. If you want to specify, for example, the SCUA navigation:

```html
<vul-navigation division="specialcollections"></vul-navigation>
```

**NOTE:** `<vul-navigation>` is not encapsulated within a Shadow DOM in order to utilize Bootstrap's dropdown functionality.

#### `<vul-banner>`

```html
<body>
    <vul-brandbar></vul-brandbar>
    <vul-header>
        <vul-navigation></vul-navigation>
        <vul-banner></vul-banner>
    </vul-header>
</body>
```

By default, `<vul-banner>` uses the Heard banner. To specify one of the other division banners:

```html
<vul-banner division="Special Collections"></vul-banner>
```

Or if you need to specify a banner image specific to the site:

```html
<!-- Between the Lines WP example -->
<vul-banner image="/wp-content/uploads/sites/18/2020/11/Banner-3200x400px-scaled.jpg"></vul-banner>
```

You may also customize the banner text through its [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Slot):

```html
<vul-banner division="Special Collections">
    <div slot="graphic-header-title">
        <b>Special Collections<br>
        and University Archives</b>
    </div>
</vul-banner>
```

And if you need to link the banner text:

```html
<vul-banner 
    division="Special Collections" 
    graphic-header-title-url="https://www.library.vanderbilt.edu/specialcollections"
>
    <div slot="graphic-header-title">
        <b>Special Collections<br>
        and University Archives</b>
    </div>
</vul-banner>
```

#### `<vul-banner-alt>`
This derivative of `<vul-banner>` is used for banners that require the small text above the header title text, such as the division sites. The same API in `<vul-banner>` applies to this component, with some added functionality to accommodate the extra text.

The small text isn't linked by default; to link:

```html
<vul-banner-alt 
    division="Special Collections"
    graphic-header-small-url="https://www.library.vanderbilt.edu"
    graphic-header-title-url="https://www.library.vanderbilt.edu/specialcollections"
>
    <div slot="graphic-header-title">
        <b>Special Collections<br>
        and University Archives</b>
    </div>
</vul-banner-alt>
```

A slot is provided to customize the small text as needed:

```html
<!-- SCUA Collection Guides example -->
<vul-banner-alt 
    division="Special Collections"
    graphic-header-small-url="https://www.library.vanderbilt.edu/specialcollections"
    graphic-header-title-url="https://collections.library.vanderbilt.edu"
>
    <div slot="graphic-header-small">
        Special Collections and University Archives
    </div>
    <div slot="graphic-header-title">
        <b>Collections Guides</b>
    </div>
</vul-banner-alt>
```

### Footer Component
To get started with the footer component, include its JS file. The CSS stylesheet is automatically included by the component.

#### `<vul-footer>`
To add the footer:

```html
<body>
    <vul-footer></vul-footer>
</body>
```

The component also provides a slot to include HTML at the end of the credits section:

```html
<vul-footer>
    <p>
        <small>
            Powered by ILLiad &middot; &copy; <a href="http://www.atlas-sys.com" style="color: #aaa; text-decoration: underline;">Atlas Systems, Inc</a>. All Rights  Reserved.
        </small>
    </p>
</vul-footer>
```

**NOTE:** Be aware that anything entered into the slot is exposed to the light DOM, so the component CSS will not apply. This may necessitate adding some complementary CSS via the `style` attribute as above or within the app's customized stylesheet to ensure a cohesive style.

## Development
This project uses [Laravel Mix](https://laravel-mix.com/) to compile its assets.
