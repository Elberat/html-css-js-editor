import React, { useContext } from "react";
import AceEditor from "react-ace";
import { EditorContext } from "../../context/context";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";

const HtmlEditor = () => {
    const { html, setHtml } = useContext(EditorContext);

    return (
        <AceEditor
            placeholder="Write HTML here"
            mode="html"
            theme="monokai"
            name="editor_html"
            fontSize="16"
            height={"100%"}
            width={"100%"}
            value={html}
            onChange={(value) => setHtml(value)}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 4,
            }}
        />
    );
};

export default HtmlEditor;
