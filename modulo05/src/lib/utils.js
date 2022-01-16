module.exports = {
    age(timestamp){ 
        const today = new Date()
        const birthDay = new Date(timestamp)
        let age = today.getFullYear() - birthDay.getFullYear()
        const month = today.getMonth() - birthDay.getMonth()
        
        if(month < 0 || month == 0 && today.getDate() < birthDay.getDate()){
            age = age -1
        }
        return age
        
    },
    date(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)


        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },

    grade(schoolYear){

        switch(schoolYear){
            case '5EF':
                return '5º ano do Ensino Fundamental'
                break;
            case '6EF':
                return '6º ano do Ensino Fundamental'
                break;
            case '7EF':
                return '7º ano do Ensino Fundamental'
                break;
            case '8EF':
                return '8º ano do Ensino Fundamental'
                break;
            case '9EF':
                return '9º ano do Ensino Fundamental'
                break;
            case '1EM':
                return '1º ano do Ensino Médio'
                break;
            case '2EM':
                return '2º ano do Ensino Médio'
                break;
            case '3EM':
                return '3º ano do Ensino Médio'
                break;
            default:
                return 'Ano letivo não informado.'
                break;
        }
    
    },
}

