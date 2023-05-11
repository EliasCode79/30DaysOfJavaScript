/*
Change stye of each paragraph using JavaScript(eg.color, background, border, font - size, font - family)
Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
Set text content, id and class to each paragraph
*/

let parrafos = document.querySelectorAll('p');
parrafos[0].style.color = 'green';
parrafos[0].style.backgroundColor = 'blue';
parrafos[1].style.border = '3px solid black';
parrafos[2].style.fontSize = '45px';
parrafos[3].style.fontFamily = 'calibri';

parrafos.forEach((element, index) => {
	if (index % 2 === 0) {
		element.style.color = 'green';
	} else {
		element.style.color = 'red';
	}
});

parrafos[0].classList.add('nuevaClase');
parrafos[1].className = 'test';
parrafos[2].classList.add('nuevaClase');
parrafos[3].textContent = 'vamos a ver q pedo';
