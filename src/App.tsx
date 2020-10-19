import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FooView from "./views/FooView";
import BarView from "./views/BarView";
import { Layout } from "./views/Layout";
import "./styles/main.scss";
import editor from "./views/editor";

import {monaco, ControlledEditor} from '@monaco-editor/react'
import path from 'path';


function ensureFirstBackSlash(str:string) {
    return str.length > 0 && str.charAt(0) !== '/'
        ? '/' + str
        : str;
}
 
function uriFromPath(_path:string) {
    const pathName = path.resolve(_path).replace(/\\/g, '/');
    return encodeURI('file://' + ensureFirstBackSlash(pathName));
}

const path1 = path.join(__dirname, '../../node_modules/monaco-editor/min/vs');
console.log("Path is set to ", path1);
 
monaco.config({
  paths: {
    vs: uriFromPath(
      path1
    )
  }
});

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <div>Hello you</div>
                <Switch>
                    <Route path="/bar" component={BarView} />
                    <Route exact path="/foo" component={FooView} />
                    <Route exact path="/" component={editor} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
