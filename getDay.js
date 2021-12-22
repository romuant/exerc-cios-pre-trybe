function getDayName(dateString) {
    
    // Write your code here

    const date = new Date(dateString);

    const options = {
      weekday: 'long'
    };
  
    return new Intl.DateTimeFormat('en-Us', options).format(date);
}
console.log( getDayName())
