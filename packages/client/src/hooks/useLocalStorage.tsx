export const useLocalStorage = function() {

    const setState = (name: string, data: any) => {
        const dataStr = JSON.stringify(data)
        localStorage.setItem(name, dataStr)
    }

    const getState = (name: string) => {
        const data = localStorage.getItem(name)

        return JSON.parse(data as string)
    }


    return {
        setState,
        getState
    }
}