let p = document.querySelector('p');
let result = '';

// We looping on the content of our paragraph and searching
// exclamation and question marks, when we find them we 
// replace them by appropriate emojis using emoji code and 
// after that concatenate with resulting string.
for(let i = 0; i < p.textContent.length; i++) {
    if(p.textContent[i] === '?') {
        result += String.fromCodePoint(0x1F914);
    }else if(p.textContent[i] === '!') {
        result += String.fromCodePoint(0x1F632);
    }else {
        result += p.textContent[i];
    }
}

// After loop we assign resulting string to paragraph content
p.innerText = result;