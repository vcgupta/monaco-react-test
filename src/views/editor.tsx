import React, { useEffect } from 'react';
import {monaco, ControlledEditor} from '@monaco-editor/react'
import path from 'path';
// import {MonacoDiffEditor} from 'react-monaco-editor';

// import { ControlledEditor, DiffEditor} from 'monaco-editor-electron';


export default function(){

    useEffect(()=>{
        
    }, []);

    const content = `
        <html><body>
        <h1>My H1 data</h1>
        </body></html>
    `

    return (
        <div>
            <h1>Monaco Editor screen</h1>
            {/* <MonacoDiffEditor 
                original={content}
                value={content}
                language="json"
            /> */}
            <ControlledEditor 
            value={content} 
            language="html"
            />
            {/* <ControlledEditor
            value={content} 
            language="html"
            />
            <h2>Second Diff editor</h2>
            <DiffEditor 
            original={content}
            modified={content}
            /> */}
        </div>
    )
}