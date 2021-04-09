let p = document.querySelector('p');
let split = p.innerText.split(' ');
let result = '';

// Looping on array of words, 
// check whether word length greater than 8 symbols,
// if greater than the word is going embeded to 'span' tag with class attribute 'highlight' 
// and concatenated with resulting string,
// else  word is going merely concatenated with resulting string.
for(item of split) {
    if(item.length > 8) {
        result += `<span class="highlight">${item}</span> `;
    }else {
        result += ' ' + item + ' ';
    }
}

// After loop we have resulting string with highlighted 'span' tags 
// and so we use 'innerHTML' property to refresh the content of our 'p' tag
p.innerHTML = result;