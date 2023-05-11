/* 
1 Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
2 Get each of the the paragraph using document.querySelector('#id') and by their id
3 Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
4 Loop through the nodeList and get the text content of each paragraph
5 Set a text content to paragraph the fourth paragraph,Fourth Paragraph
6 Set id and class attribute for all the paragraphs using different attribute setting methods
*/

const parrafo = document.querySelector('p');
console.log(parrafo);

let id = document.querySelector('#parrafoId');
console.log(id);

let allP = document.querySelectorAll('p');
console.log(allP);

allP.forEach((element) => {
	console.log(element.textContent);
});

allP[3].textContent = 'parrafo cuatro';

allP.forEach((element, i) => {
	element.className = `${i}`;
});

allP[2].classList.add('classlist');
