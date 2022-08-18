let count = 0
document.getElementById('button-addon2').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value
    count++
    const mainTable = document.getElementById("table")
    const tableElement = document.createElement('tr')
    // tableElement.classList.add(' ')
    tableElement.innerHTML = `
    <td class="text-center ">${count}</td>
    <td class="text-center">${inputText}</td>
    <td class="text-center">
    <button type="button" class="btn btn-danger bg-danger my-1 py-1 delete-btn">Remove</button>
    <button type="button" class="btn btn-success done py-1 my-1 bg-success">Done</button>
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
    const doneBtn = document.getElementsByClassName('done')
    for(const done of doneBtn){
        done.addEventListener('click', function(event){
           event.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
        //    event.target.parentNode.parentNode.style.textDecoration = "line-through" 
        })
        
    }


       
})
document.getElementById('clear-all').addEventListener('click', function(event){
    // console.log(event.target.previousElementSibling.chid)
    // console.log(event.target.parentNode.childNodes[1].childNodes[3].style.display= "none")
    document.getElementById('content-container').classList.add('d-none')
    // console.log(table)

})


