## ALTERNATE SOLUTIONS

### Solution 1
```js
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
    
    // Replace low-upper case to low-space-uppercase 
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    
    // Replace space and underscore with - 
    return str.replace(regex, "-").toLowerCase();
}
```

### Code Explanation:
- **regex** contains the regular expression ```/\s+|_+/g```, which will select all white spaces and underscores.
- The first ```replace()``` puts a space before any encountered uppercase characters in the string **str*** so that the spaces can be replaced by dashes later on.
- While returning the string, another ```replace()``` replaces spaces and underscores with dashes using **regex**.

### Solution 2
```js
function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/[a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash 
    return str.toLowerCase().split(/(?:_| )+/).join("-");
}
```

### Code Explanation:
- Similar to the first solution, the first ```replace()``` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
- Instead of using ```replace()``` here to replace whitespace and underscores with dashes, the string is ```split()``` on the regular ```/(?:_| )+/``` and ```join()```-ed on ```-```.

### REFERENCE LINKS:
- [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
- [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### Solution 3
```js
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // -- David St. Hubbins
    
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
```

### Code Explanation:
- Split the string at one of the following conditions (*converted to an array*)
    - a whitespace character [```\s```] is encountered
    - underscore character [```_```] is encountered 
    - or is followed by an uppercase letter [```(?=[A-Z])```]
- Join the array using a hyphen (```-```)
- Lowercase the whole resulting string 

### REFERENCE LINKS
- [String#split](http://devdocs.io/javascript/global_objects/string/split)
- [RegExp](http://devdocs.io/javascript/global_objects/regexp)
- Array#join(http://devdocs.io/javascript/global_objects/array/join)
- String#toLowerCase(http://devdocs.io/javascript/global_objects/string/tolowercase)

