const divContainer = document.querySelector('.divContainer');

//create a 16x16 grid of divs
for (let i = 0; i < 16; i++) {
	const column = document.createElement('div');
	column.style.backgroundColor = 'blue';
	column.style.display = 'flex';
	column.style.flexDirection = 'column';
	column.style.flexBasis = 'calc(100%/16)';
	divContainer.appendChild(column);

	for (let j = 0; j < 16; j++) {
		const div = document.createElement('div')
		div.style.display = 'flex';
		div.style.flexBasis = 'calc(100%/16)';
		div.style.backgroundColor = 'orange';
		div.textContent='ree';
		column.appendChild(div);
	}
};
