const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const sanitizeInput = (input) => {
  const $element = $("<p>");

  $element.text(input);

  return $element.text();
};

const createForm = () => {
  const $form = $("<form>");
  const $title = $("<input>");
  const $userId = $("<input>");
  const $body = $("<input>");
  const $button = $("<button>");

  $form.append($title);
  $form.append($userId);
  $form.append($body);
  $form.append($button);

  return $form;
};

const createPost = (postData) => {
  const { title, id, userId, body } = postData;

  return `
      <article>
      <h1>POST #${id} : ${title}</h1>
      <h2>By author: ${userId}</h2>
      <p>${sanitizeInput(body)}</p>
      </article>
      `;
};

// Better for security in user created inputs
const createPostButBetter = (postData) => {
  const { title, id, userId, body } = postData;

  const $post = $("<article>"); // Creates instead of targeting
  const $title = $("<h1>");
  const $author = $("<h2>");
  const $body = $("<p>");

  $title.text(`POST #${id} : ${title}`);
  $author.text(`By author: ${userId}`);
  $body.text(body);

  $post.append($title);
  $post.append($author);
  $post.append($body);

  $post.click((event) => $(event.currentTarget).css("background-color", generateColor()));

  return $post;
};

const appendOnePost = (postData) => {

      // const newPost = createPost(postData);
      const newPost = createPostButBetter(postData);
      $("main .posts").prepend(newPost);

};

const appendAllThePosts = (postList) => {
  setTimeout(() => {
    $(".loading").remove();

    for (const postData of postList) {
      // const newPost = createPost(postData);
      const newPost = createPostButBetter(postData);
      $("main .posts").append(newPost);
    }
  }, 2000);
};