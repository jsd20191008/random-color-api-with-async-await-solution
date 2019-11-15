$(document).ready(function () {
  $('#randomize').click(() => {
    fetchColor()
  })

  /*
    Modify the fetchColor() to use Async / Await to make the API request
    instead of $.ajax()
  */
  async function fetchColor () {
    try {
      const url = 'https://css-colors-api.herokuapp.com/api/v1/colors/random'

      const response = await axios.get(url)
      console.log(response)
      updateUi(response.data)
    } catch (error) {
      console.log(error)
      alert('an error occurred')
    }

    // make API request using #.ajax()
    // $.ajax({
    //   url: url,
    //   type: 'GET'
    // })
    // .done((response) => {
    //   console.log(response)
    //   // get response from successful API call and
    //   // pass response data to the updateUi() function
    //   updateUi(response)
    // })
    // .fail((error) => {
    //   console.log(error)
    //   alert('an error occurred')
    // })
  }

  function updateUi (color) {
    // extract the hexcode and name from object
    const hexcode = color.hexcode
    const colorName = color.name

    // use jQuery to update the UI
    $('.circle').css('backgroundColor', hexcode)
    $('.color-name').text(colorName)
    $('.color-hex').text(hexcode)
  }
})
