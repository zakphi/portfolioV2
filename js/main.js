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

  topSetup = () => {
    console.log('contentSetup')
    $('<h1>').appendTo('#top')

    $('<h3>').appendTo('#top')

    $('<article>').appendTo('#top')

    $('<button>', {
      'id': 'about',
      'html': 'about'
    }).appendTo('#top article')

    $('<button>', {
      'id': 'work',
      'html': 'work'
    }).appendTo('#top article')

    $('<button>', {
      'id': 'social',
      'html': 'social'
    }).appendTo('#top article')
  }

  siteSkeleton()
  topSetup()
})