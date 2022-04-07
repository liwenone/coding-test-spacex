import { ApolloError } from "@apollo/client/errors"
import { useEffect, useState } from "react"
import { debounce } from "./index"


export function useReachBottom(fn: Function) {
  useEffect(() => {
    const eventHandler = debounce(() => {
      const threshold = 20

      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight      

      if (scrollTop + clientHeight >= scrollHeight - threshold) {
        fn()
      }
    })

    window.addEventListener('scroll', eventHandler)

    return () => {
      window.removeEventListener('scroll', eventHandler)
    }
  }, [fn])
}
