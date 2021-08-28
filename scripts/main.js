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

//func change color of div element on hover
function divHoverColor() {
    const divElement = document.querySelectorAll('#div-element');

    divElement.forEach((element) => {

        //func changes the color of div
        function changeDivColor() {
        divElementColor = document.querySelector('#div-element');
        
        divElementColor.classList.remove('div-element');
        divElementColor.classList.add('div-element-mouseover');
    }

        element.addEventListener('click', changeDivColor());
    });
}

divHoverColor();