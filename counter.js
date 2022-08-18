let count = 0

document.getElementById('plus').addEventListener('click', function(){
    count++
    document.getElementById('counter').innerText = count
})
document.getElementById('minus').addEventListener('click', function(){
    count--
    document.getElementById('counter').innerText = count
})