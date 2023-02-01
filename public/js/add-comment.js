// const saveComment = async (event) => {
//   event.preventDefault();

//   const btn = document.querySelector("#saveBtn");
//   if (btn.hasAttribute("data-id")) {
//     const id = btn.getAttribute("data-id");
//     const body = document.querySelector("#comment-body").value.trim();

//     if (body) {
//       const response = await fetch("/api/comments/", {
//         method: "POST",
//         body: JSON.stringify({ body, id }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         document.location.replace("/post/" + id);
//       } else {
//         alert("Failed to create comment");
//       }
//     } else {
//       alert("You must provide a comment");
//     }
//   } else {
//     alert("Missing ID on Button");
//   }
// };

// document.querySelector("#saveBtn").addEventListener("click", saveComment);