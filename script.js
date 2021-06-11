let measurement = 0 /* creates variable 'measurement */

document.getElementById('button').addEventListener('click', multiplication) /* makes action occur when button is clicked */

function multiplication () {
  measurement = document.getElementById('input').value /* links the variable to the input in html file */

  measurement = parseInt(measurement) /* records input as integer */

  measurement = measurement * 4 /* multiplies input for variable 'measurement' by 4 */

  alert('The area of your square is ' + measurement) /* alerts results of the calculation, prints string 'The area of your square is ' with result of calculated value of the variable 'measurement */
}
