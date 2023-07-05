import React, {useEffect, useState} from 'react'

export const SettingsContext = React.createContext();

function SettingsProvider({children}){
    const [displayCount, setDisplayCount] = useState(3);
    const [showComplete, setShowComplete] = useState(false);
    const [sort, setSort] = useState('difficulty');
    const [show, setShow] = useState(false)
    
 const saveLocal = ()=>{
    localStorage.setItem('todo',JSON.stringify({displayCount, showComplete, sort})
    );
 }

    const values = {
        displayCount,
        showComplete,
        sort,
        show,
        setSort,
        setDisplayCount,
        setShowComplete,
        saveLocal,
        setShow,
    }

    useEffect(()=>{
        let storage = JSON.parse(localStorage.getItem('todo'))
        if(storage){
            setDisplayCount(storage.displayCount);
            setShowComplete(storage.showcomplete);
            setSort(storage.sort);
        }
    }, [])

    return(
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;