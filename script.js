let measurement = 0 

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  measurement = document.getElementById('input').value

  measurement = parseInt(measurement)

  measurement = measurement * 4

  alert("The area of your square is " +  measurement)
}