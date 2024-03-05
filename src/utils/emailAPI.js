export const sendEmail = ({ name, email, subject, message }) => {
  return fetch("http://localhost:3001/send-email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      if (data.error) {
        Promise.reject(`Error ${data.error}`);
      }
      return data;
      console.log(data);
    });
};
