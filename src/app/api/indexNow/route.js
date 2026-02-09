export async function GET() {
  const baseUrl = "https://jaganreddy.vercel.app"
  const key = "da6e46b7ca334a9b9d7e1107089b4433"
  const keyLocation = `${baseUrl}/${key}.txt`

  const urls = [
    baseUrl,
    `${baseUrl}/#experience`,
    `${baseUrl}/#projects`,
    `${baseUrl}/#connect`,
    `${baseUrl}/#contact`,
  ]

  try {
    await Promise.all(
      urls.map((url) =>
        fetch(
          `https://www.bing.com/indexnow?url=${url}&key=${key}&keyLocation=${keyLocation}`,
        ),
      ),
    )
    return new Response("IndexNow ping sent successfully", { status: 200 })
  } catch (err) {
    return new Response("IndexNow ping failed: " + err, { status: 500 })
  }
}
