const newFormHandler = async (event) => {
  event.preventDefault();

  const btn = document.querySelector("#saveBtn");

  if (btn.hasAttribute("data-id")) {
    const comment_id = btn.getAttribute("data-id");
    const post_id = btn.getAttribute("post-id");
    const body = document.querySelector("#comment-body").value.trim();

    if (body) {
      const response = await fetch("/api/comments/" + comment_id, {
        method: "PUT",
        body: JSON.stringify({ body }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/post/" + post_id);
      } else {
        alert("Failed to update comment");
      }
    } else {
      alert("You must provide a comment");
    }
  } else {
    alert("Missing ID on Button");
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const post_id = event.target.getAttribute("post-id");

    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".update-comment-form")
  .addEventListener("submit", newFormHandler);

document.querySelector("#delBtn").addEventListener("click", delButtonHandler);
