// Get all the blocks
const mvblocks = document.querySelectorAll('.moveBlock');

// Define the grid size and gap
const gridSize = 100;
const gridGap = 10;


mvblocks.forEach(block => {
  block.addEventListener('mousedown', () => {
    block.style.cursor = 'grabbing';
  });

  block.addEventListener('mouseup', () => {
    block.style.cursor = 'grab';
  });

  block.addEventListener('dragstart', e => {
    e.preventDefault();
  });

  block.addEventListener('mousedown', e => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = block.offsetLeft;
    const startTop = block.offsetTop;

    const mouseMoveHandler = e => {
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;

      // Calculate the new position of the block
      const newLeft = startLeft + diffX;
      const newTop = startTop + diffY;

      // Snap the block to the grid
      const snappedLeft = Math.round(newLeft / (gridSize + gridGap)) * (gridSize + gridGap);
      const snappedTop = Math.round(newTop / (gridSize + gridGap)) * (gridSize + gridGap);

      // Update the position of the block
      block.style.left = snappedLeft + 'px';
      block.style.top = snappedTop + 'px';
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
});


const backgroundColorSelect = document.querySelector('#background-color-select');
const body = document.querySelector('body');
const block = document.querySelectorAll('.block');
const head = document.querySelector('#header');
const contatiner = document.querySelector('.container');




backgroundColorSelect.addEventListener('change', () => {
  const selectedOption = backgroundColorSelect.value;

  switch (selectedOption) {
    case '1':
        body.style.backgroundColor = '#eee5e9ff'; 
        head.style.backgroundColor = '#383d3bff';
        body.style.color ='#92dce5ff';
        contatiner.style.color ='#92dce5ff';
        contatiner.style.backgroundColor = '#383d3bff';

        block.forEach(blocki => {
            blocki.style.backgroundColor = '#52dee5ff';
        });
        break;

    case '2':
        body.style.backgroundColor = '#f2f5ea'; 
        head.style.backgroundColor = '#e75a7c'
        body.style.color ='#2c363f';
        contatiner.style.color ='#2c363f';
        contatiner.style.backgroundColor = '#f2f5ea';

        block.forEach(blocki => {
            blocki.style.backgroundColor = '#bbc7a4';
        });
    break;

    
    case '3':
        body.style.backgroundColor = '#250902'; 
        head.style.backgroundColor = '#800e13';
        body.style.color ='#fff';
        contatiner.style.color ='#fff';
        contatiner.style.backgroundColor = '#250902';

        block.forEach(blocki => {
            // Set the initial position
            blocki.style.backgroundColor = '#ad2831';

        });
    break;

    
    case '4':
        body.style.backgroundColor = '#000000'; /* black */
        body.style.color ='#FFFFFF';
        contatiner.style.color ='#fff';
        body2.forEach(block => {
            // Set the initial position
            block.style.backgroundColor = '#101010';
        });
    break;
    
    case '5':
        body.style.backgroundColor = '#E5D9F2'; /* lavender */
        body.style.color ='#000000';
        body2.forEach(block => {
            // Set the initial position
            block.style.backgroundColor = '#F5EFFF';
        });
    break;
        
      
      
  }
});
