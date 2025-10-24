document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const res = await fetch(form.action, {
                method: "POST",
                headers: {
                    "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value
                },
                body: formData
            });

            const data = await res.json();
            if (data.message) {
                responseDiv.textContent = data.message;
                responseDiv.style.color = "green";
            } else {
                responseDiv.textContent = data.error;
                responseDiv.style.color = "red";
            }
        } catch (err) {
            responseDiv.textContent = "Error submitting form!";
            responseDiv.style.color = "red";
        }
    });
});
