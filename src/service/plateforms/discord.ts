const webhookURL =
  'https://discord.com/api/webhooks/1355617311708418149/qgQQUv4viIbq3UKV4Hvm_cf5JuBWGLdWRQCJIqmgMCsZgiwkxowLD6c1GOd_JRsFa6-Z'

export const sendFromWebhook = (msg: string, webhook?: string) => {
  const message = {
    content: msg,
    username: 'RPad',
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36d9ejBDz7QQGgRiHbRYSXC5eqr_MOOyfRA&s', // Optional: Custom bot avatar
  }

  fetch(webhook ?? webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return 'ok'
    })
    .then((data) => console.log('Message sent:', data))
    .catch((error) => console.error('Error sending message:', error))
}
