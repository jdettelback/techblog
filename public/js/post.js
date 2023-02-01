const newFormHandler = async (event) => {
  event.preventDefault();
  
  const btn = document.querySelector("#saveBtn");

  if (btn.hasAttribute("data-id")) {
    const id = btn.getAttribute("data-id");
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();

     if (title && body) {
      const response = await fetch("/api/posts/" + id, {
        method: "PUT",
        body: JSON.stringify({ title, body }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        console.log(response);
        alert("Failed to update post");
      }
    } else {
      alert("You must provide title and body");
    }
  } else {
    alert("Missing ID on Post");
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Failed to delete post");
    }
  }
};

const saveComment = async (event) => {
  event.preventDefault();

  const btn = document.querySelector("#saveCommentBtn");
  if (btn.hasAttribute("data-id")) {
    const id = btn.getAttribute("data-id");
    const body = document.querySelector("#comment-body").value.trim();

    if (body) {
      const response = await fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({ body, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/post/" + id);
      } else {
        alert("Failed to create comment");
      }
    } else {
      alert("You must provide a comment");
    }
  } else {
    alert("Missing ID on Button");
  }
};

document
  .querySelector(".update-post-form")
  .addEventListener("submit", newFormHandler);

document.querySelector("#delBtn").addEventListener("click", delButtonHandler);

document.querySelector("#saveCommentBtn").addEventListener("click", saveComment);
