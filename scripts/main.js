//creating 16x16 div grid

//func creates 16x16 div container
function multiDivGrid() {

    //func creates one div element in container
    function divGrid() {
        const divContainer = document.querySelector('#container');
        const divElement = document.createElement('div');
        divElement.setAttribute('id', 'div-element');
        divElement.classList.add('div-element');

        divContainer.appendChild(divElement);
    }

    for (i = 0; i < 256; i++) {
        divGrid();
    }
}

multiDivGrid();

//function for RESET button
function resetAndAlign() {
    const resetButton = document.querySelector('#reset-button');
    
    //func for reseting the grid
    function gridReset() {
        const gridElement = document.querySelectorAll('#div-element');
        gridElement.forEach((element) => {
            element.style.background = 'white';
        });
    }

    //func for user prompt for grid align
    function gridAlignPrompt() {
        const userGridPrompt = prompt('What number of squares per side for the new grid do you want?');


        //userMultiDivGrid
        function userMultiDivGrid(userGrid) {
            const divContainer = document.querySelector('#container');

            //func delete old grid
            function deleteOldGrid() {
                while (divContainer.hasChildNodes()) {
                    divContainer.removeChild(divContainer.firstChild);
                }
            }
            //func creates one div element in container
            function divGrid() {
                const divElement = document.createElement('div');
                divElement.setAttribute('id', 'div-element');
                divElement.classList.add('div-element');
        
                divContainer.appendChild(divElement);
            }
            
            deleteOldGrid();

            for (i = 0; i < userGrid**2; i++) {
                divGrid();
            }
            divContainer.setAttribute(`style`,
            `grid-template-columns: repeat(${userGridPrompt}, 1fr);
            grid-template-rows: repeat(${userGridPrompt}, 1fr);` );
        }
       
        userMultiDivGrid(userGridPrompt);
    }

    resetButton.addEventListener('click', function(e) {
        gridReset();
        gridAlignPrompt();
        divHoverColor();
    });
}

resetAndAlign();

//func change color of div element on hover
function divHoverColor() {
    const divElement = document.querySelectorAll('#div-element');

    divElement.forEach((element) => {
        element.addEventListener('mouseover', function(e) {
            e.target.style.background = 'black';
        });
    });
}

divHoverColor();