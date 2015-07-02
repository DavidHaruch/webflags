# WebFlags

This is a 'test' of my own javascript skills to load a script AJAX style, then interpret JSON. The JSON is the basis for the urls that get wikimedia common's huge collection of flag svgs.

## Why svg?

## Other projects that make this possible

1. ### Mledoze's countries
for making an awesome repo that contains all sovereign states in tons of formats (json,yaml,etc.).
[https://github.com/mledoze/countries](https://github.com/mledoze/countries)

1. ### Wikipedia
for making all sovereign state's flags available and easily accessible in svgs.
[https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags](https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags)

1. ### Blueimp's javascript MD5
which is required to get the wikipedia flag URLs beacause they can't just store all images in 1 directory, so they divide them by digits in the file's md5 hash. This script allows you to calculate an md5 of anything through a simple md5().
[https://github.com/blueimp/JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5)