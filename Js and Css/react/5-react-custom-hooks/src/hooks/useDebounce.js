import {useCallback, useRef, useState} from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef()

    // const [timer, setTimer] = useState(null)

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)

        // if (timer !== null){
        //     clearTimeout(timer)
        // }

        // setTimer(setTimeout(() => {
        //     callback(...args)
        // }, delay))
    }, [callback, delay])

    return debouncedCallback;
}