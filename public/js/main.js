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
      work = jsonRes.work.reverse()
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
      'html': 'click here to see my resume',
      'target': '_blank'
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

    work.map(project => {
      let title = project.title.split(' ').join('')
      $('<div>', {
        'id': title
      }).appendTo('#bottom #workCont')

      $('<h4>', {
        'html': project.title
      }).appendTo(`#bottom #workCont #${title}`)

      $('<p>', {
        'html': project.summary
      }).appendTo(`#bottom #workCont #${title}`)

      $('<div>', {
        'id': 'techCont'
      }).appendTo(`#bottom #workCont #${title}`)

      $('<h5>', {
        'html': 'tech'
      }).appendTo(`#bottom #workCont #${title} #techCont`)

      $('<ul>', {
        'html': project.tech.map(tech => {
          let iconClass = tech == 'express' ? `devicon-${tech}-original` : `devicon-${tech}-plain`
          return $('<li>', {
            'html': `${`<i class=${iconClass}></i>`} ${tech}`
          })
        })
      }).appendTo(`#bottom #workCont #${title} #techCont`)

      $('<span>', {
        'id': 'links'
      }).appendTo(`#bottom #workCont #${title} #techCont`)

      $('<a>', {
        'href': project.live,
        'html': 'live',
        'target': '_blank'
      }).appendTo(`#bottom #workCont #${title} #links`)

      let github = $('<a>', {
        'href': project.github,
        'html': 'github',
        'target': '_blank'
      })
      project.github != '' ? github.appendTo(`#bottom #workCont #${title} #links`) : null
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