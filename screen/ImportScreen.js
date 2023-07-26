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
    NewformItem.setAttribute("id", `formItem${index}`)
    NewformItem.setAttribute("class", "border p-3 rounded-3 border-primary mb-2")

    let ItemFormGroup1 = document.createElement("div") // create a div
    ItemFormGroup1.setAttribute("class", "form-group mt-2") // set class for div
    let ItemLabel1 = document.createElement("label") // creat a label
    ItemLabel1.setAttribute("class", "fw-semibold") // set class for label
    ItemLabel1.textContent = "Tên loại quả" // set text for label
    let ItemInput1 = document.createElement("input") // create a input
    ItemInput1.setAttribute("type", "text") // set type for input
    ItemInput1.setAttribute("class", "form-control mt-2") // set class for input
    ItemInput1.setAttribute("id", `fruitName${index}`) // set id for input

    let ItemFormGroup4 = document.createElement("div")
    ItemFormGroup4.setAttribute("class", "form-group mt-2")
    let ItemLabel4 = document.createElement("label")
    ItemLabel4.setAttribute("class", "fw-semibold")
    ItemLabel4.textContent = "Số lượng thùng"
    let ItemInput4 = document.createElement("input")
    ItemInput4.setAttribute("type", "text")
    ItemInput4.setAttribute("class", "form-control mt-2")
    ItemInput4.setAttribute("id", `amountBoxFruit${index}`)

    let ItemFormGroup2 = document.createElement("div")
    ItemFormGroup2.setAttribute("class", "form-group mt-2")
    let ItemLabel2 = document.createElement("label")
    ItemLabel2.setAttribute("class", "fw-semibold")
    ItemLabel2.textContent = "Trọng lượng mỗi thùng"
    let ItemInput2 = document.createElement("input")
    ItemInput2.setAttribute("type", "text")
    ItemInput2.setAttribute("class", "form-control mt-2")
    ItemInput2.setAttribute("id", `weightFruit${index}`)

    let ItemFormGroup3 = document.createElement("div")
    ItemFormGroup3.setAttribute("class", "form-group mt-2")
    let ItemLabel3 = document.createElement("label")
    ItemLabel3.setAttribute("class", "fw-semibold")
    ItemLabel3.textContent = "Trọng lượng hàng tốt"
    let ItemInput3 = document.createElement("input")
    ItemInput3.setAttribute("type", "text")
    ItemInput3.setAttribute("class", "form-control mt-2")
    ItemInput3.setAttribute("id", `perfectweightFruit${index}`)

    let ItemButton = document.createElement("button")
    ItemButton.setAttribute("class", "btn btn-primary my-3")
    ItemButton.setAttribute("id", `btDeleteForm${index}`)
    ItemButton.setAttribute("type", "button")
    ItemButton.setAttribute("onclick", "fnDeteleForm(this.id)")
    ItemButton.textContent = "Delete Form"

    ItemFormGroup1.appendChild(ItemLabel1) // add label to form
    ItemFormGroup1.appendChild(ItemInput1) // add input to form

    ItemFormGroup2.appendChild(ItemLabel2)
    ItemFormGroup2.appendChild(ItemInput2)

    ItemFormGroup3.appendChild(ItemLabel3)
    ItemFormGroup3.appendChild(ItemInput3)

    ItemFormGroup4.appendChild(ItemLabel4)
    ItemFormGroup4.appendChild(ItemInput4)

    NewformItem.appendChild(ItemFormGroup1) //add form to new item
    NewformItem.appendChild(ItemFormGroup4)
    NewformItem.appendChild(ItemFormGroup2)
    NewformItem.appendChild(ItemFormGroup3)
    NewformItem.appendChild(ItemButton)

    formContent.appendChild(NewformItem) // add new item to form content
})

let btSubmitInformation = document.getElementById('btSubmitInformation');

btSubmitInformation.addEventListener('click', function () {
    let arrWeight = []
    let arrPerfectWeight = []
    let amountBox = []
    let arrName = []
    let arrFarm = []
    for (let i = 0; i < formContent.children.length; i++) {
        let idNumber = parseInt(formContent.children[i].id.substr(8))
        arrWeight[i] = document.getElementById(`weightFruit${idNumber}`).value;
        arrName[i] = document.getElementById(`fruitName${idNumber}`).value;
        arrPerfectWeight[i] = document.getElementById(`perfectweightFruit${idNumber}`).value;
        amountBox[i] = document.getElementById(`amountBoxFruit${idNumber}`).value;
    }
    arrFarm[0] = farmName.value;
    arrFarm[1] = importCode.value;
    console.log(arrWeight);
    console.log(arrPerfectWeight);
    console.log(amountBox);
    console.log(arrName);
    console.log(arrFarm);
})

function fnDeteleForm(btID) {
    document.getElementById(document.getElementById(btID).parentElement.id).remove()
}

