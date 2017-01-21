var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var person = katzDeliLine.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var string

  if(line.length === 0) {
    string = "The line is currently empty."
  } else {
    var people = []
    string = "The line is currently:"
    for(var i = 0; i < line.length; i++) {
      people.push(` ${i+1}. ${line[i]}`)
    }
    people.join()
    string = `${string}${people}`
  }

  return string
}
