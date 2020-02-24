function isHot(temperature) {
  return(temperature >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.')
}


function helloThere(name) {
  return(name.length <= 6 ? `Hello, ${name}` : `Hi, ${name}`);
}


function goodbyeYou(name) {
  return(name ? `Goodbye, ${name}` : 'Goodbye, stranger')
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}