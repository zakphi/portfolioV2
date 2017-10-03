$(() => {
  console.log('script loaded')

  let about = ''
  let work = ''
  let skills = ''
  let social = ''

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
    $('<h1>', {
      'html': 'philip zak'
    }).appendTo('#top')

    $('<h3>', {
      'html': 'web developer'
    }).appendTo('#top')

    $('<p>', {
      'html': 'click on a button to learn more about me'
    }).appendTo('#top')

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
      skills = jsonRes.skills
      social = jsonRes.social
    })

  aboutSetup = () => {
    console.log('about btn clicked')
    $('#bottom article').remove()

    $('<article>', {
      'id': 'summary'
    }).appendTo('#bottom')

    $('<h2>', {
      'html': 'about'
    }).appendTo('#bottom #summary')

    $('<p>', {
      'html': about.summary
    }).appendTo('#bottom #summary')

    $('<article>', {
      'id': 'skills'
    }).appendTo('#bottom')

    $('<h2>', {
      'html': 'skills'
    }).appendTo('#bottom #skills')

    $.each(skills, (k, v) => {
      console.log(k)
      $('<div>', {
        'id': k
      }).appendTo('#bottom #skills')

      $('<h3>', {
        'html': k
      }).appendTo(`#bottom #skills #${k}`)

      console.log(v)
      $('<ul>', {
        'html': v.map(v => {
          return $('<li>', {
            'html': `${`<i class='${v} == express ? devicon-${v}-original : devicon-${v}-plain'></i>`} ${v}`
          })
        })
      }).appendTo(`#bottom #skills #${k}`)
    })
  }

  $(document).on('click', '#about', aboutSetup)

  workSetup = () => {
    console.log('work btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>', {
      'html': 'work'
    }).appendTo('#bottom article')

    console.log(work)
    $.each(work, (k, v) => {
      console.log(v)

      $('<div>', {
        'id': k
      }).appendTo('#bottom article')

      $('<h3>', {
        'html': v.title
      }).appendTo(`#bottom article #${k}`)

      $('<p>', {
        'html': v.summary
      }).appendTo(`#bottom article #${k}`)

      console.log(v.tech)
      $('<h4>', {
        'html': 'tech'
      }).appendTo(`#bottom article #${k}`)

      $('<ul>', {
        'html': v.tech.map(v => {
          return $('<li>', {
            'html': `${`<i class='${v} == express ? devicon-${v}-original : devicon-${v}-plain'></i>`} ${v}`
          })
        })
      }).appendTo(`#bottom article #${k}`)

      $('<span>', {
        'id': 'links'
      }).appendTo(`#bottom article #${k}`)

      $('<a>', {
        'href': v.live,
        'html': 'live'
      }).appendTo(`#bottom article #${k} #links`)

      $('<a>', {
        'href': v.github,
        'html': 'github'
      }).appendTo(`#bottom article #${k} #links`)
    })
  }

  $(document).on('click', '#work', workSetup)

  socialSetup = () => {
    console.log('social btn clicked')
    $('#bottom article').remove()

    $('<article>').appendTo('#bottom')

    $('<h2>', {
      'html': 'social'
    }).appendTo('#bottom article')

    console.log(social)

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-envelope-o'
        }),
        'href': `mailto:${social.email}`
      }),
      'id': 'email'
    }).appendTo('#bottom article')

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-github'
        }),
        'href': social.github
      }),
      'id': 'github'
    }).appendTo('#bottom article')

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-linkedin'
        }),
        'href': social.linkedin
      }),
      'id': 'linkedin'
    }).appendTo('#bottom article')
  }

  $(document).on('click', '#social', socialSetup)

  siteSkeleton()
  topSetup()
})