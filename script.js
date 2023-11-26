var inputname = document.getElementById('inputname')
var inputlname = document.getElementById('inputlname')
var inputage = document.getElementById('inputage')
var addBtn = document.getElementById('addBtn')
var removeBtn1 = document.getElementById('removeBtn1')
var removeBtn2 = document.getElementById('removeBtn2')

addBtn.addEventListener('click', function() {
    if (inputname.value === '' ||
        inputlname.value === '' ||
        inputage.value === '' ||
        inputage.value <= 0  ) {
        alert('Įveskite duomenis    ')
    } else {
        var table = document.getElementById("myTable")
        
        var row = table.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        
        cell1.innerHTML = inputname.value
        cell2.innerHTML = inputlname.value
        cell3.innerHTML = inputage.value
        
        inputname.value = ''
        inputlname.value = ''
        inputage.value = ''
    }
})

removeBtn1.addEventListener('click', function() {
    var table = document.getElementById("myTable")
    if (table.rows.length > 1) {
        table.deleteRow(1)
    } else {
        alert('Nebėra ką trinti.')
    }
})

removeBtn2.addEventListener('click', function() {
    var table = document.getElementById("myTable")
    var lastRowIndex = table.rows.length - 1
    if (lastRowIndex > 0) {
        table.deleteRow(lastRowIndex)
    } else {
        alert('Nebėra ką trinti.')
    }
})
