const localStoragekey = 'to-do-list-ls'

function newTask()
{
    let input = document.getElementById('input-new-task')

    if(!input.value)
    {
        alert('digite algo para inserir em sua lista')
    }
    // else if()
    else
    {
        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='renoveItem'("${values[i]['name']}")>ok</button></li>`
    }
}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey,JSON.stringify(values))
}

showValues()