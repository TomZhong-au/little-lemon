const LAMBDA_URL =
  "https://adh09fchd7.execute-api.ap-southeast-2.amazonaws.com/prod";

export default function sendEmail(formData) {
  const body = {
    sender: "confirm@tomdev.net",
    receiver: [formData.email],
    subject: "🍋 Booking Confirmation 🍋",
    content: generateHtmlContent(formData),
  };

  fetch(LAMBDA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

function generateHtmlContent(formData) {
  const { date, time, guests, username } = formData;

  return `
<html>
Dear ${username},<br/>
Thank you for your booking  at Little Lemon Restaurant. <br/>
Your booking on <b>${date} ${time} for ${guests} seats</b> is confirmed.<br/>
We are looking forward to seeing you.
</html>
`;
}
