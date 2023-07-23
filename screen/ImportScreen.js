let btImport = document.getElementById('btImport');
let btExport = document.getElementById('btExport');
let importArena = document.getElementById('importArena');
let exportArena = document.getElementById('exportArena');

btImport.addEventListener('click', function () {
    importArena.style.display = 'block';
    exportArena.style.display = 'none';
})

btExport.addEventListener('click', function () {
    importArena.style.display = 'none';
    exportArena.style.display = 'block';
})

let index = 1;
let formContent = document.getElementById('formContent');
let btAddNewForm = document.getElementById('btAddNewForm');
let farmName = document.getElementById('farmName');
let importCode = document.getElementById('importCode');

btAddNewForm.addEventListener('click', function () {
    index++;
    let NewformItem = document.createElement("form")
    NewformItem.setAttribute("id", "formItem")

    let ItemFormGroup1 = document.createElement("div") // create a div
    ItemFormGroup1.setAttribute("class", "form-group mt-2") // set class for div
    let ItemLabel1 = document.createElement("label") // creat a label
    ItemLabel1.setAttribute("class", "fw-semibold") // set class for label
    ItemLabel1.textContent = "Tên loại quả" // set text for label
    let ItemInput1 = document.createElement("input") // create a input
    ItemInput1.setAttribute("type", "text") // set type for input
    ItemInput1.setAttribute("class", "form-control mt-2") // set class for input
    ItemInput1.setAttribute("id", `fruitName${index}`) // set id for input
    ItemInput1.setAttribute("placeholder", "VD: Cam") // set placeholder for input

    let ItemFormGroup2 = document.createElement("div")
    ItemFormGroup2.setAttribute("class", "form-group mt-2")
    let ItemLabel2 = document.createElement("label")
    ItemLabel2.setAttribute("class", "fw-semibold")
    ItemLabel2.textContent = "Trọng lượng"
    let ItemInput2 = document.createElement("input")
    ItemInput2.setAttribute("type", "text")
    ItemInput2.setAttribute("class", "form-control mt-2")
    ItemInput2.setAttribute("id", `weightFruit${index}`)
    ItemInput2.setAttribute("placeholder", "VD: 10 Kg")

    ItemFormGroup1.appendChild(ItemLabel1) // add label to form
    ItemFormGroup1.appendChild(ItemInput1) // add input to form

    ItemFormGroup2.appendChild(ItemLabel2)
    ItemFormGroup2.appendChild(ItemInput2)

    NewformItem.appendChild(ItemFormGroup1) //add form to new item
    NewformItem.appendChild(ItemFormGroup2)

    formContent.appendChild(NewformItem) // add new item to form content
})

let btSubmit = document.getElementById('btSubmit');

btSubmit.addEventListener('click', function () {
    let arrWeight = []
    let arrName = []
    let arrFarm = []
    for (let i = 1; i <= index; i++) {
        arrWeight[i - 1] = document.getElementById(`weightFruit${i}`).value;
        arrName[i - 1] = document.getElementById(`fruitName${i}`).value;
    }
    arrFarm[0] = farmName.value;
    arrFarm[1] = importCode.value;
    console.log(arrWeight);
    console.log(arrName);
    console.log(arrFarm);
})
