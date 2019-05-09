//Array variable to hold quotations
var data = [
  {
    id: 1,
    title: 'Prevail',
    body: 'Failure will never overtake me if my determination to succeed is strong enough.',
    author: 'Og Mandino',
  },
  {
    id: 2,
    title: 'Succeed',
    body: 'Do not wait; the time will never be "just right." Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.',
    author: 'George Herbert',
  },
  {
    id: 3,
    title: 'Inspire',
    body: 'You cannot wait for inpspiration. You have to go after it with a club.',
    author: 'Jack London',
  },
  {
    id: 4,
    title: 'Change',
    body: 'Only I can change my life. No one can do it for me.',
    author: 'Carol Burnett',
  },
  {
    id: 5,
    title: 'Persist',
    body: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas A. Edison',
  },
  {
    id: 6,
    title: 'Grow',
    body: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Zig Ziglar',
  },
]

//Other variables
var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

//Functions
function initPosts() {
  for (var i = 0; i<data.length; i++) {
    //Create elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section>'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>')
      ;($author = $('<span class="author"></span>')), ($navItem = $('<li></li>'))

      //Add post data
      $title.text(data[i].title)
      $body.text(data[i].body)
      $author.text(data[i].author)

      //Add navigation data
      $navItem.attr('id', data[i].id)
      $navItem.text(data[i].title)

      //Combine post text elements
      $post.attr('id', postId)
      $post.append($title)
      $post.append($body)
      $post.append($author)

      //Publish elements to the page
      $posts.append($post)
      $nav.append($navItem)

      //Wire up navigation click event
      $navItem.on('click', function() {
        var id = $(this).attr('id')
        $posts.children().hide()
        $posts.find('#post-' + id).fadeIn()
      })

      //Hide all quotations and show the intro
      $posts.children('.post').hide()
      $intro.fadeIn(500)

    }
}

//Call the function and make it all happen
initPosts()

$posts.on('click', function() {
  $posts.children('.post').hide()
  $intro.fadeIn(500)
})
