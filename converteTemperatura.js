function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    // Escreva seu código aqui
    function convertCelsiusFahrenheit (temp, origem) {
        if (origem === 'celsius') {
            return (temp * 1.8) + 32
        } 
            return (temp - 32) / 1.8
        
    }
    
    function convertCelsiusToKelvin (temp, origem) {
        if (origem === 'celsius') return temp + 273.15
            return temp - 273.15
        }
    
    
    function convertKelvinFahrenheit (temp, origem, final) {
        if (origem === 'kelvin') {
            const celsiusTemp =  convertCelsiusToKelvin(temp, origem)
            const fahrenheit = convertCelsiusFahrenheit(celsiusTemp, 'celsius')
            return fahrenheit
        }
        
        const celsiusTemp = convertCelsiusFahrenheit(temp, origem)
        const kelvinTemp = convertCelsiusToKelvin(celsiusTemp, 'kelvin')
        return kelvinTemp
        
    }
    // celsius -> kelvin e kelvin -> celsius
    
    if (escalaOrigem === 'kelvin' && escalaDesejada === 'celsius' ) {
        return convertCelsiusToKelvin(temperatura, 'kelvin')
    } 
    if (escalaOrigem === 'celsius' && escalaDesejada === 'kelvin') {
        return convertCelsiusToKelvin(temperatura, 'celsius')
    }
    
    // celsius -> fahrenheit e fahrenheit -> celsius
    
    if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'celsius' ) {
        return convertCelsiusFahrenheit(temperatura, 'fahrenheit')
    } 
    if (escalaOrigem === 'celsius' && escalaDesejada === 'fahrenheit') {
        return convertCelsiusFahrenheit(temperatura, 'celsius')
    }
    
    // fahrenheit -> kelvin e kelvin -> fahrenheit 
    
     if (escalaOrigem === 'kelvin' && escalaDesejada === 'fahrenheit' ) {
        return convertKelvinFahrenheit(temperatura, 'kelvin')
    } 
    if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'kelvin') {
        return convertKelvinFahrenheit(temperatura, 'fahrenheit')
    }
    
    
    
    
   
    
}