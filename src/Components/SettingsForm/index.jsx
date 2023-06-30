
import React from 'react';
import {useContext} from 'react';
import { SettingsContext } from '../../Context/Settings';
import { ClassNames } from '@emotion/react';
import { Grid, TextInput, createStyles } from '@mantine/core';
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
        displyCount,
        showComplete,
        SetDisplay,
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
                    <TextInput placeholder={sort} label='Difficulty' onChange={(event)=> setSort(event.target.value)}
                />
                </form>
            </Grid.Col>
            <Grid.Col span={6}>2</Grid.Col>

            <Grid.Col>
                <TextInput placeholder={sort} label=''></TextInput>
            </Grid.Col>

        </Grid>
        </>
        

    )

} 
export default SettingsForm;