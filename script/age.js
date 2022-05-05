function age(dayUser, monthUser, yearUser) {

    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    let day = new Date().getDate()

    if (month <= monthUser && day < dayUser) {
        finalAge -= 1;
    }
    
    const finalAge = year - yearUser;
    
    return finalAge
}

// "year" é o ID do span criado no HTML para retornar a idade Validada

document.getElementById("year").innerHTML = age(16, 04, 2003);

