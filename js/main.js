$(() => {
  console.log('script loaded')

  let about = ''
  let work = ''

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
      work = jsonRes.work
    })

  aboutSetup = () => {
    console.log('about btn clicked')
    $('#bottom article').remove()

    $('<article>', {
      'id': 'summary'
    }).appendTo('#bottom')

    $('<h2>').appendTo('#bottom #summary')
    $('#summary h2').text('about')

    $('<p>').appendTo('#bottom #summary')
    $('p').text(about.summary)
  }

  $(document).on('click', '#about', aboutSetup)

  workSetup = () => {
    console.log('work btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>').appendTo('#bottom article')
    $('h2').text('work')

    console.log(work)
    $.each(work, (k, v) => {
      console.log(v)

      $('<h3>', {
        'html': v.title
      }).appendTo('#bottom article')

      $('<p>', {
        'html': v.summary
      }).appendTo('#bottom article')

      $('<a>', {
        'href': v.live,
        'html': 'live'
      }).appendTo('#bottom article')

      $('<a>', {
        'href': v.github,
        'html': 'github'
      }).appendTo('#bottom article')
    })
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