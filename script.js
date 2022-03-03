const button = document.querySelector('#calculateBMI');
button.addEventListener('click', formulaBMI);

function formulaBMI(e){
    e.preventDefault();
    const age = document.querySelector('#age').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#height').value;
    const height = result.replace("," , ".");
    

    if (age === "" || weight === "" || height ===""){
    Swal.fire('Введите данные о себе')
        return false
    } 
    
    else if(height <= 0 || height > 3){
        Swal.fire('Введите рост в метрах')
        return false
    }
    let bodyMassIndex = weight/(height*height);

    bodyMassIndex = bodyMassIndex.toFixed(1);

    document.querySelector('#result').textContent = bodyMassIndex;
    
    if (age <= 30 && 27.5 < bodyMassIndex){
        document.querySelector('#advice').textContent = "Ожирение"
    }
    else if (age > 30 && 30 < bodyMassIndex){
        document.querySelector('#advice').textContent = "Ожирение"
    }
    else if (age <= 30 && 27.5 >= bodyMassIndex & bodyMassIndex >= 23){
        document.querySelector('#advice').textContent = "Избыток массы тела"
    }
    else if (age > 30 && 30 >= bodyMassIndex & bodyMassIndex >= 25.1){
        document.querySelector('#advice').textContent = "Избыток массы тела"
    }

    else if (age <= 30 && 22.9 >= bodyMassIndex & bodyMassIndex >= 18.6){
        document.querySelector('#advice').textContent = "Норма"
    }
    else if (age > 30 && 25 >= bodyMassIndex & bodyMassIndex >= 19){
        document.querySelector('#advice').textContent = "Норма"
    }
    
    else if (age <= 30 && bodyMassIndex < 18.5){
        document.querySelector('#advice').textContent = "Дефицит массы тела"
    }
    else if (age > 30 && bodyMassIndex < 19){
        document.querySelector('#advice').textContent = "Дефицит массы тела"
    }
}