$(() => {
  console.log('script loaded')

  siteSkeleton = () => {
    console.log('siteSkeleton')
    $('<main>').prependTo('body')

    $('<section>', {
      'id': 'top'
    }).appendTo('main')

    $('<section>', {
      'id': 'bottom'
    }).appendTo('main')
  }

  siteSkeleton()
})