// Adds 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  // process to Lower case
  this.processor = function(string) {
    return string.toLowerCase();
  }


  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
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
