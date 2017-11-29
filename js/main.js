$(() => {
  let about = ''
  let work = ''
  let skills = ''
  let social = ''

  siteSkeleton = () => {
    $('<main>').prependTo('body')

    $('<section>', {
      'id': 'top'
    }).appendTo('main')

    $('<section>', {
      'id': 'bottom'
    }).appendTo('main')
  }

  topSetup = () => {
    $('<h1>', {
      'html': 'philip zak'
    }).appendTo('#top')

    $('<h2>', {
      'html': 'web developer'
    }).appendTo('#top')

    $('<p>', {
      'html': 'click below for more information'
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

  fetch('files/data.json')
    .then(res => res.json())
    .then(jsonRes => {
      about = jsonRes.about
      work = jsonRes.work
      skills = jsonRes.skills
      social = jsonRes.social
    })

  aboutSetup = () => {
    $('#bottom article').remove()

    $('<article>', {
      'id': 'summary'
    }).appendTo('#bottom')

    $('<h3>', {
      'html': 'about'
    }).appendTo('#bottom #summary')

    $('<p>', {
      'html': about.summary
    }).appendTo('#bottom #summary')

    $('<a>', {
      'href': about.resume,
      'html': 'resume'
    }).appendTo('#bottom #summary')

    $('<article>', {
      'id': 'skills'
    }).appendTo('#bottom')

    $('<h3>', {
      'html': 'skills'
    }).appendTo('#bottom #skills')

    $('<div>', {
      'id': 'skillsCont'
    }).appendTo('#bottom #skills')

    $.each(skills, (k, v) => {
      $('<div>', {
        'id': k
      }).appendTo('#bottom #skillsCont')

      $('<h4>', {
        'html': k
      }).appendTo(`#bottom #skillsCont #${k}`)

      $('<ul>', {
        'html': v.map(v => {
          let iconClass = v == 'express' ? `devicon-${v}-original` : `devicon-${v}-plain`
          return $('<li>', {
            'html': `${`<i class=${iconClass}></i>`} ${v}`
          })
        })
      }).appendTo(`#bottom #skillsCont #${k}`)
    })
  }

  $(document).on('click', '#about', aboutSetup)

  workSetup = () => {
    $('#bottom article').remove()

    $('<article>', {
      'id': 'work'
    }).appendTo('#bottom')

    $('<h3>', {
      'html': 'work'
    }).appendTo('#bottom #work')

    $('<div>', {
      'id': 'workCont'
    }).appendTo('#bottom #work')

    $.each(work, (k, v) => {
      $('<div>', {
        'id': k
      }).appendTo('#bottom #workCont')

      $('<h4>', {
        'html': v.title
      }).appendTo(`#bottom #workCont #${k}`)

      $('<p>', {
        'html': v.summary
      }).appendTo(`#bottom #workCont #${k}`)

      $('<div>', {
        'id': 'techCont'
      }).appendTo(`#bottom #workCont #${k}`)

      $('<h4>', {
        'html': 'tech'
      }).appendTo(`#bottom #workCont #${k} #techCont`)

      $('<ul>', {
        'html': v.tech.map(v => {
          let iconClass = v == 'express' ? `devicon-${v}-original` : `devicon-${v}-plain`
          return $('<li>', {
            'html': `${`<i class=${iconClass}></i>`} ${v}`
          })
        })
      }).appendTo(`#bottom #workCont #${k} #techCont`)

      $('<span>', {
        'id': 'links'
      }).appendTo(`#bottom #workCont #${k} #techCont`)

      $('<a>', {
        'href': v.live,
        'html': 'live',
        'target': '_blank'
      }).appendTo(`#bottom #workCont #${k} #links`)

      $('<a>', {
        'href': v.github,
        'html': 'github',
        'target': '_blank'
      }).appendTo(`#bottom #workCont #${k} #links`)
    })
  }

  $(document).on('click', '#work', workSetup)

  socialSetup = () => {
    $('#bottom article').remove()

    $('<article>', {
      'id': 'social'
    }).appendTo('#bottom')

    $('<h3>', {
      'html': 'social'
    }).appendTo('#bottom #social')

    $('<div>', {
      'id': 'socialCont'
    }).appendTo('#bottom #social')

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-envelope-o'
        }),
        'href': `mailto:${social.email}`
      }),
      'id': 'email'
    }).appendTo('#bottom #social #socialCont')

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-github'
        }),
        'href': social.github,
        'target': '_blank'
      }),
      'id': 'github'
    }).appendTo('#bottom #social #socialCont')

    $('<p>', {
      'html': $('<a>', {
        'html': $('<i>', {
          'class': 'fa fa-linkedin'
        }),
        'href': social.linkedin,
        'target': '_blank'
      }),
      'id': 'linkedin'
    }).appendTo('#bottom #social #socialCont')
  }

  $(document).on('click', '#social', socialSetup)

  siteSkeleton()
  topSetup()
})