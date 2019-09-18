'use strict';

var todoText = " - Buy milk\n";

todoText = [
    "My todo:\n",
    todoText,
    " - Download games\n",
    ' '.repeat(4) + " - Diablo\n"
].join("")

console.log(todoText);