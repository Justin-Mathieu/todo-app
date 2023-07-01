
import React from 'react';
import {useContext, useState} from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings';
import { Grid, TextInput, createStyles, Button, Text, NumberInput, Switch} from '@mantine/core';
import {IconSettings} from '@tabler/icons-react';
const useStyles = createStyles((theme)=>({
    h1:{
        backgroundColor: theme.colors.gray[0],
        color: theme.colors.gray[0],
        width:'80%',
        margin: 'auto',
        fontSize: theme.fontSizes.md,
        padding: theme.spacing.md,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md
    }
}));

function SettingsForm(){ 
    const {classes} = useStyles();
    const {show, setShow} = useState(false)
    const {
        displayCount,
        showComplete,
        setDisplayCount,
        setShowComplete,
        sort,
        setSort,
    } = useContext(SettingsContext);


    function handleSubmit(){

    }

    return(
        <>
        <h1 className={ classes.h1}><IconSettings/>Manage Settings</h1>
        <Grid>
            <Grid.Col span={6}> 
                <form onSubmit={handleSubmit}>
                    <Text fontSize='xl'>Update Settings</Text>
                    <Switch checked={showComplete} onChange={(e)=>setShowComplete(e.currentTarget.checked)} label='Show Completed'/>
                    
                        <NumberInput value={displayCount} label='Keyword' onChange={(e)=>setDisplayCount(e.target.value)} />
                        <TextInput placeholder={sort} label='Difficulty' onChange={(event)=> setSort(event.target.value)}/>
                </form>
                    
                  
              
                
               
                <Button type='submit'>Save New Settings</Button>
            </Grid.Col>
                <Grid.Col span={6}>
<When condition={show}>
<Text fontSize='xl'>Updated Settings</Text>
<Text>{showComplete ? 'show' : 'hide'} Completed Todos</Text>
<Text>items per page: {displayCount}</Text>
<Text>Sort Keyword: {sort}</Text>
</When>
                </Grid.Col>
        </Grid>
        </>
        

    )

} 
export default SettingsForm;