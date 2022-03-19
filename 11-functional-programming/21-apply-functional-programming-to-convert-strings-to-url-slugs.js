/*

Apply Functional Programming to Convert Strings to URL Slugs

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 

You can use any of the methods covered in this section, and don't use replace. 

Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

*/

// Only change code below this line
function urlSlug(title) {
    let finalTitle = [];
    let titleToUrl = title
      .toLowerCase()
      .trim()
      .split(" ")
      .filter(word => word.length !== 0)
      .join("-")

    return titleToUrl;
    }
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));