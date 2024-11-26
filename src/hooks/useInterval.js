import { useEffect, useRef } from 'react'

export function useInterval(callback, delay) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearInterval(id)
    }
  }, [delay])
}