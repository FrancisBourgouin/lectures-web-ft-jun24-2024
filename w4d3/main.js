console.log("INSERTING POSTS!");

$(document).ready(() => {
  $(".no-js").remove();

  // $("main").append(createForm());

  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  })
    .then(appendAllThePosts)
    .catch(console.log);


    

  $("header button").click(() => {
    // $("form").addClass("hidden")
    // $("form").removeClass("hidden")
    $("form").toggleClass("hidden")
  })

  $("form").on("submit", (event) => {
    event.preventDefault()

    const data = $(event.currentTarget).serialize()
    // express.urlencoded({extended:false})

    console.log(data)
    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data
    })
    .then(appendOnePost)
    .catch(console.log)
  })
});
