import { useCallback, useEffect, useState } from "react"
import articles from "../data/articles.json"

const loadArticles = () =>
  new Promise((resolve, reject) => {
    // Local data today; structured as an async boundary so this can be
    // swapped for a live Medium/RSS fetch without touching the UI states.
    setTimeout(() => {
      if (Array.isArray(articles?.details)) {
        resolve(articles.details)
      } else {
        reject(new Error("Articles could not be loaded"))
      }
    }, 350)
  })

const useArticles = () => {
  const [status, setStatus] = useState("loading")
  const [data, setData] = useState([])
  const [attempt, setAttempt] = useState(0)

  const retry = useCallback(() => setAttempt((a) => a + 1), [])

  useEffect(() => {
    let cancelled = false
    setStatus("loading")

    loadArticles()
      .then((items) => {
        if (cancelled) return
        setData(items)
        setStatus(items.length ? "success" : "empty")
      })
      .catch(() => {
        if (cancelled) return
        setStatus("error")
      })

    return () => {
      cancelled = true
    }
  }, [attempt])

  return { articles: data, status, retry }
}

export default useArticles
