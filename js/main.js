$(() => {
  console.log('script loaded')

  let about = ''

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

  fetch('data/data.json')
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes)

      about = jsonRes.about
    })

  aboutSetup = () => {
    console.log('about btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>').appendTo('#bottom article')
    $('h2').text('about')

    $('<p>').appendTo('#bottom article')
    $('p').text(about.summary)
  }

  $(document).on('click', '#about', aboutSetup)

  workSetup = () => {
    console.log('work btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>').appendTo('#bottom article')
  }

  $(document).on('click', '#work', workSetup)

  socialSetup = () => {
    console.log('social btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>').appendTo('#bottom article')
  }

  $(document).on('click', '#social', socialSetup)

  siteSkeleton()
  topSetup()
})