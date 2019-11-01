let zipCodes = [12345, 54321];
function checkZipCode(event){
    alert(`These are the zip codes ${zipCodes[0]}, ${zipCodes[1]}`)
    }
const input = document.getElementById('eventClick')
input.addEventListener('click', checkZipCode)



