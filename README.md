# vul-pubweb-components
We often brand integrated systems with the Libraries' public web theme header and/or footer. Historically, this has resulted in frustrating style bleed issues that require significant time investment to remedy despite our best efforts to minimize them.

This repo leverages [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) technologies to provide versions of the public web header and footer that may be added to a site with minimal to no style bleed issues.

## Usage
### Header
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="dist/css/vul-pw-header.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700|Source+Sans+Pro:200,300,400,700&display=swap">
  </head>
  <body>
    <vul-brandbar></vul-brandbar>
    <vul-header division="Jean &amp; Alexander Heard Libraries">
      <vul-navigation></vul-navigation>
    </vul-header>
  
    <!-- ... -->

    <script src="dist/js/vul-pw-header.js"></script>
    
    <!-- BS3 JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  
    <!-- Emergency alerts -->
    <script src="https://cdn.vanderbilt.edu/vu-www4/brandbar/emergency.js"></script>
  </body>
</html>
```

**NOTE:** `<vul-brandbar>` and `<vul-navigation>` are not encapsulated within a Shadow DOM in order to utilize Bootstrap's dropdown functionality.

### Footer
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700|Source+Sans+Pro:200,300,400,700&display=swap">
  </head>
  <body>
    <!--  ...  -->

    <vul-footer></vul-footer>
    
    <script src="dist/js/vul-pw-footer.js"></script>
  </body>
</html>
```

### Bootstrap 3 vs Bootstrap 4
Two versions of the components are needed for a couple of reasons:
 * Bootstrap 4 updated the expected structure of its dropdown components
 * Bootstrap 4 also updated its styling

So use whichever version of Bootstrap the integrated system you're working with is already using. As for the question of which version to choose for integrated systems that don't utilize Bootstrap in the first place, choosing either version shouldn't matter, as they're both developed to be visually and functionally equivalent to the public web.

## Development
This project uses [Laravel Mix](https://laravel-mix.com/) to compile its assets.
