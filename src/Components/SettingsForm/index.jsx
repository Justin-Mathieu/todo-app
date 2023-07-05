
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
    const {
        displayCount,
        showComplete,
        setDisplayCount,
        setShowComplete,
        sort,
        setSort,
        saveLocal,
        setShow,
        show,
    } = useContext(SettingsContext);


function handleSubmit(e){
    e.preventDefault();
    saveLocal();
    setShow(true);
    e.target.reset();
    console.log(showComplete);
}

    return(
    <>
        <h1 className={ classes.h1}><IconSettings/>Manage Settings</h1>
        <Grid>
            <Grid.Col span={6}> 
                <form onSubmit={handleSubmit}>
                    <Text fontSize='xl'>Update Settings</Text>

                    <Switch checked={showComplete} onChange={(e)=>setShowComplete(e.currentTarget.checked)} label='Show Completed'/>

                    <NumberInput value={displayCount} label='Items Per Page' onChange={setDisplayCount} />

                    <TextInput placeholder={sort} label='Keywork' onChange={(event)=> setSort(event.target.value)}/>
                     <Button type='submit'>Save New Settings</Button>
                </form>
                    
                 
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