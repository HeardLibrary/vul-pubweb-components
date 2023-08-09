# vul-pubweb-components
We often brand integrated systems with the Libraries' public web theme navigation and/or footer. Historically, this resulted in frustrating style bleed issues that required significant time investment to remedy despite our best efforts to minimize them.

This repo leverages [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) technologies to provide versions of the public web navigation and footer that are minimally affected by outside styles.

Additionally, navigation updates on the public web have necessitated applying the same update across any systems using that same navigation; a tedious process. These public web components (PWC) fetch the public web menu data using a WordPress REST API endpoint, eliminating the need to update the PWC menus manually.

## FutureVUL PWC Usage
First, include the PWC JS either in the `<head>` using the `defer` attribute or at the bottom of the `<body>`:

```html
<head>
  <script defer src="https://cdn.library.vanderbilt.edu/futurevul/pwc/js/pwc.min.js"></script>
</head>
```

```html
<body>  
  <!-- ... -->

  <script src="https://cdn.library.vanderbilt.edu/futurevul/pwc/js/pwc.min.js"></script>
</body>
```

To add the components:

```html
<body>
  <vul-navigation></vul-navigation>

  <!-- ... -->

  <vul-footer></vul-footer>
</body>
```

Yep, it's that easy!

To include additional HTML at the bottom of the footer component, use a `<template>` with an `id="vul-footer"`:

```html
<vul-footer>

<template id="vul-footer">
  <p>
    Powered by ILLiad &middot; &copy; <a href="http://www.atlas-sys.com">Atlas Systems, Inc</a>. All Rights Reserved.
  </p>
</template>
```

## Development
This project uses [Laravel Mix](https://laravel-mix.com/) to compile its assets.
