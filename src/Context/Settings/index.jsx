import React, {useState} from 'react'

export const SettingsContext = React.createContext();

function SettingsProvider({children}){
    const [display, setDisplay] = useState(3);
    const [hide, setHide] = useState(false);
    const [sort, setSort] = useState('difficulty');

    const defaultValues = {
        display,
        hide,
        sort,
    }
    return(
        <SettingsContext value={defaultValues}>
            {children}
        </SettingsContext>
    )

}

export default SettingsProvider;