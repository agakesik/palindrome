module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  // // process to Lower case
  // this.processor = function(string) {
  //   return string.toLowerCase();
  // }


  // Returns content processed for palindrome testing (letters only & lower case)
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Return only letters of the content
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if(this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // use transaltion instead od content for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
// TranslatedPhrase.prototype = new Phrase();
