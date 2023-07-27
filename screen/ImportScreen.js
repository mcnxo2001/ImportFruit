// import Arena

let btImport = document.getElementById('btImport');
let btExport = document.getElementById('btExport');
let btEdit = document.getElementById('btEdit');
let importArena = document.getElementById('importArena');
let exportArena = document.getElementById('exportArena');
let editArena = document.getElementById('editArena');

btImport.addEventListener('click', function () {
    importArena.style.display = 'block';
    exportArena.style.display = 'none';
    editArena.style.display = 'none';
})

btExport.addEventListener('click', function () {
    importArena.style.display = 'none';
    exportArena.style.display = 'block';
    editArena.style.display = 'none';
})

btEdit.addEventListener('click', function () {
    importArena.style.display = 'none';
    exportArena.style.display = 'none';
    editArena.style.display = 'block';
})

let index = 1;
let formContent = document.getElementById('formContent');
let btAddNewForm = document.getElementById('btAddNewForm');
let farmName = document.getElementById('farmName');
let importCode = document.getElementById('importCode');
let reportCode = document.getElementById('reportCode');

let arrWeight = []
let arrPerfectWeight = []
let amountBox = []
let arrName = []
let arrReport = []

function addNewForm(f, e, a, b, c, d) {
    let NewformItem = document.createElement("form")
    NewformItem.setAttribute("id", e) // `formItem${index}`
    NewformItem.setAttribute("class", "border p-3 rounded-3 border-primary mb-2")

    let NewRow = document.createElement("div")
    NewRow.setAttribute("class", "row")

    let NewCol1 = document.createElement("div")
    NewCol1.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    let ItemFormGroup1 = document.createElement("div") // create a div
    ItemFormGroup1.setAttribute("class", "form-group mt-2") // set class for div
    let ItemLabel1 = document.createElement("label") // creat a label
    ItemLabel1.setAttribute("class", "fw-semibold") // set class for label
    ItemLabel1.textContent = "Tên loại quả" // set text for label
    let ItemInput1 = document.createElement("input") // create a input
    ItemInput1.setAttribute("type", "text") // set type for input
    ItemInput1.setAttribute("class", "form-control mt-2") // set class for input
    ItemInput1.setAttribute("id", a) // set id for input `fruitName${index}`

    let NewCol4 = document.createElement("div")
    NewCol4.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    let ItemFormGroup4 = document.createElement("div")
    ItemFormGroup4.setAttribute("class", "form-group mt-2")
    let ItemLabel4 = document.createElement("label")
    ItemLabel4.setAttribute("class", "fw-semibold")
    ItemLabel4.textContent = "Số lượng thùng"
    let ItemInput4 = document.createElement("input")
    ItemInput4.setAttribute("type", "text")
    ItemInput4.setAttribute("class", "form-control mt-2")
    ItemInput4.setAttribute("id", b) // `amountBoxFruit${index}`

    let NewCol2 = document.createElement("div")
    NewCol2.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    let ItemFormGroup2 = document.createElement("div")
    ItemFormGroup2.setAttribute("class", "form-group mt-2")
    let ItemLabel2 = document.createElement("label")
    ItemLabel2.setAttribute("class", "fw-semibold")
    ItemLabel2.textContent = "Trọng lượng mỗi thùng"
    let ItemInput2 = document.createElement("input")
    ItemInput2.setAttribute("type", "text")
    ItemInput2.setAttribute("class", "form-control mt-2")
    ItemInput2.setAttribute("id", c)// `weightFruit${index}`

    let NewCol3 = document.createElement("div")
    NewCol3.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    let ItemFormGroup3 = document.createElement("div")
    ItemFormGroup3.setAttribute("class", "form-group mt-2")
    let ItemLabel3 = document.createElement("label")
    ItemLabel3.setAttribute("class", "fw-semibold")
    ItemLabel3.textContent = "Trọng lượng hàng tốt"
    let ItemInput3 = document.createElement("input")
    ItemInput3.setAttribute("type", "text")
    ItemInput3.setAttribute("class", "form-control mt-2")
    ItemInput3.setAttribute("id", d) //`perfectweightFruit${index}`

    let NewColButton = document.createElement("div")
    NewColButton.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3 coverbtn mt-3")
    let ItemButton = document.createElement("button")
    ItemButton.setAttribute("class", "btn btn-danger btDelete")
    ItemButton.setAttribute("id", `btDeleteForm${index}`)
    ItemButton.setAttribute("type", "button")
    ItemButton.setAttribute("onclick", "fnDeteleForm(this.id)")
    ItemButton.textContent = "Delete Form"

    ItemFormGroup1.appendChild(ItemLabel1) // add label to form
    ItemFormGroup1.appendChild(ItemInput1) // add input to form
    NewCol1.appendChild(ItemFormGroup1)

    ItemFormGroup2.appendChild(ItemLabel2)
    ItemFormGroup2.appendChild(ItemInput2)
    NewCol2.appendChild(ItemFormGroup2)

    ItemFormGroup3.appendChild(ItemLabel3)
    ItemFormGroup3.appendChild(ItemInput3)
    NewCol3.appendChild(ItemFormGroup3)

    ItemFormGroup4.appendChild(ItemLabel4)
    ItemFormGroup4.appendChild(ItemInput4)
    NewCol4.appendChild(ItemFormGroup4)

    NewColButton.appendChild(ItemButton)

    NewRow.appendChild(NewCol1)
    NewRow.appendChild(NewCol4)
    NewRow.appendChild(NewCol2)
    NewRow.appendChild(NewCol3)
    NewRow.appendChild(NewColButton)

    NewformItem.appendChild(NewRow)
    f.appendChild(NewformItem)
}

btAddNewForm.addEventListener('click', function () {
    index++;
    addNewForm(formContent, `formItem${index}`, `fruitName${index}`, `amountBoxFruit${index}`, `weightFruit${index}`, `perfectweightFruit${index}`)
})

function fnDeteleForm(btID) {
    let x = document.getElementById(`formItem${document.getElementById(btID).id.substr(12)}`).id
    document.getElementById(x).remove()
}

let btSubmitInformation = document.getElementById('btSubmitInformation');
btSubmitInformation.addEventListener('click', function () {

    for (let i = 0; i < formContent.children.length; i++) {
        let idNumber = parseInt(formContent.children[i].id.substr(8))
        arrWeight[i] = document.getElementById(`weightFruit${idNumber}`).value;
        arrName[i] = document.getElementById(`fruitName${idNumber}`).value;
        arrPerfectWeight[i] = document.getElementById(`perfectweightFruit${idNumber}`).value;
        amountBox[i] = document.getElementById(`amountBoxFruit${idNumber}`).value;
    }
    arrReport[1] = farmName.value;
    arrReport[2] = importCode.value;
    arrReport[0] = reportCode.value;

    console.log(arrWeight);
    console.log(arrPerfectWeight);
    console.log(amountBox);
    console.log(arrName);
    console.log(arrReport);
})

// retrive Arena

let formContentEdit = document.getElementById('formContentEdit');
let reportCodeEdit = document.getElementById('reportCodeEdit');
let farmNameEdit = document.getElementById('farmNameEdit');
let importCodeEdit = document.getElementById('importCodeEdit')

let btRetriveInformation = document.getElementById("btRetriveInformation")
btRetriveInformation.addEventListener("click", function () {
    reportCodeEdit.value = arrReport[0]
    farmNameEdit.value = arrReport[1]
    importCodeEdit.value = arrReport[2]

    formContentEdit.innerHTML = "";

    for (let i = 0; i < arrName.length; i++) {
        addNewForm(formContentEdit, `formItemEdit${i}`, `fruitNameEdit${i}`, `amountBoxFruitEdit${i}`, `weightFruitEdit${i}`, `perfectweightFruitEdit${i}`)
        document.getElementById(`fruitNameEdit${i}`).value = arrName[i];
        document.getElementById(`amountBoxFruitEdit${i}`).value = amountBox[i];
        document.getElementById(`weightFruitEdit${i}`).value = arrWeight[i];
        document.getElementById(`perfectweightFruitEdit${i}`).value = arrPerfectWeight[i];
    }

    // for (let i = 0; i < arrName.length; i++) {
    //     let NewformItemEdit = document.createElement("form")
    //     NewformItemEdit.setAttribute("id", `formItemEdit${i}`)
    //     NewformItemEdit.setAttribute("class", "border p-3 rounded-3 border-primary mb-2")

    //     let NewRowEdit = document.createElement("div")
    //     NewRowEdit.setAttribute("class", "row")

    //     let NewCol1 = document.createElement("div")
    //     NewCol1.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    //     let ItemFormGroup1 = document.createElement("div") // create a div
    //     ItemFormGroup1.setAttribute("class", "form-group mt-2") // set class for div
    //     let ItemLabel1 = document.createElement("label") // creat a label
    //     ItemLabel1.setAttribute("class", "fw-semibold") // set class for label
    //     ItemLabel1.textContent = "Tên loại quả" // set text for label
    //     let ItemInput1 = document.createElement("input") // create a input
    //     ItemInput1.setAttribute("type", "text") // set type for input
    //     ItemInput1.setAttribute("class", "form-control mt-2") // set class for input
    //     ItemInput1.setAttribute("id", `fruitNameEdit${i}`) // set id for input
    //     ItemInput1.value = arrName[i]

    //     ItemFormGroup1.appendChild(ItemLabel1)
    //     ItemFormGroup1.appendChild(ItemInput1)
    //     NewCol1.appendChild(ItemFormGroup1)
    //     NewRowEdit.appendChild(NewCol1)
    //     NewformItemEdit.appendChild(NewRowEdit)

    //     let NewCol4 = document.createElement("div")
    //     NewCol4.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    //     let ItemFormGroup4 = document.createElement("div")
    //     ItemFormGroup4.setAttribute("class", "form-group mt-2")
    //     let ItemLabel4 = document.createElement("label")
    //     ItemLabel4.setAttribute("class", "fw-semibold")
    //     ItemLabel4.textContent = "Số lượng thùng"
    //     let ItemInput4 = document.createElement("input")
    //     ItemInput4.setAttribute("type", "text")
    //     ItemInput4.setAttribute("class", "form-control mt-2")
    //     ItemInput4.setAttribute("id", `amountBoxFruitEdit${i}`)
    //     ItemInput4.value = amountBox[i]

    //     ItemFormGroup4.appendChild(ItemLabel4)
    //     ItemFormGroup4.appendChild(ItemInput4)
    //     NewCol4.appendChild(ItemFormGroup4)
    //     NewRowEdit.appendChild(NewCol4)
    //     NewformItemEdit.appendChild(NewRowEdit)

    //     let NewCol2 = document.createElement("div")
    //     NewCol2.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    //     let ItemFormGroup2 = document.createElement("div")
    //     ItemFormGroup2.setAttribute("class", "form-group mt-2")
    //     let ItemLabel2 = document.createElement("label")
    //     ItemLabel2.setAttribute("class", "fw-semibold")
    //     ItemLabel2.textContent = "Trọng lượng mỗi thùng"
    //     let ItemInput2 = document.createElement("input")
    //     ItemInput2.setAttribute("type", "text")
    //     ItemInput2.setAttribute("class", "form-control mt-2")
    //     ItemInput2.setAttribute("id", `weightFruitEdit${i}`)
    //     ItemInput2.value = arrWeight[i]

    //     ItemFormGroup2.appendChild(ItemLabel2)
    //     ItemFormGroup2.appendChild(ItemInput2)
    //     NewCol2.appendChild(ItemFormGroup2)
    //     NewRowEdit.appendChild(NewCol2)
    //     NewformItemEdit.appendChild(NewRowEdit)

    //     let NewCol3 = document.createElement("div")
    //     NewCol3.setAttribute("class", "col-12 col-sm-2 col-md-3 col-lg-3")
    //     let ItemFormGroup3 = document.createElement("div")
    //     ItemFormGroup3.setAttribute("class", "form-group mt-2")
    //     let ItemLabel3 = document.createElement("label")
    //     ItemLabel3.setAttribute("class", "fw-semibold")
    //     ItemLabel3.textContent = "Trọng lượng hàng tốt"
    //     let ItemInput3 = document.createElement("input")
    //     ItemInput3.setAttribute("type", "text")
    //     ItemInput3.setAttribute("class", "form-control mt-2")
    //     ItemInput3.setAttribute("id", `perfectweightFruitEdit${i}`)
    //     ItemInput3.value = arrPerfectWeight[i]

    //     ItemFormGroup3.appendChild(ItemLabel3)
    //     ItemFormGroup3.appendChild(ItemInput3)
    //     NewCol3.appendChild(ItemFormGroup3)
    //     NewRowEdit.appendChild(NewCol3)
    //     NewformItemEdit.appendChild(NewRowEdit)
    //     formContentEdit.appendChild(NewformItemEdit)
    // }
})