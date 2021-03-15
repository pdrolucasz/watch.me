import { createContext, useContext, ReactNode, useState } from 'react'

interface GenreContextData {
    selectedGenreId: number
    handleClickButton: (id: number) => void
}

interface CountdownProviderProps {
    children: ReactNode
}

export const GenreContext = createContext({} as GenreContextData)

export function GenreProvider({ children }: CountdownProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1)

    function handleClickButton(id: number) {
        setSelectedGenreId(id)
    }

    return(
        <GenreContext.Provider
            value={{
                selectedGenreId,
                handleClickButton  
            }}
        >
            {children}
        </GenreContext.Provider>
    )
}