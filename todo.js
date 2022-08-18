let count = 0
document.getElementById('button-addon2').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value
    count++
    const mainTable = document.getElementById("table")
    const tableElement = document.createElement('tr')
    tableElement.innerHTML = `
    <th class="text-center" scope="row">${count}</th>
    <td class="text-center">${inputText}</td>
    <td class="text-center">
    <button type="button" class="btn btn-danger bg-danger delete-btn">Remove</button>
    <button type="button" class="btn btn-success bg-success">Done</button>
    </td>`
    if(inputText!=''){
       mainTable.appendChild(tableElement)
       document.getElementById('input-text').value = ''
    }
    else{
        alert('Plese write a item')
    }

    const deleteBtn = document.getElementsByClassName('delete-btn')
    for(const button of deleteBtn){
        button.addEventListener('click', function(event){
           event.target.parentNode.parentNode.style.display = 'none'
        })
        
    }
})



