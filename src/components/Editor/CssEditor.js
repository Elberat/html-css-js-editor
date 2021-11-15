import React, { useContext } from "react";
import { EditorContext } from "../../context/context";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/ext-language_tools";

const CssEditor = () => {
    const { css, setCss } = useContext(EditorContext);

    return (
        <AceEditor
            value={css}
            onChange={(value) => setCss(value)}
            placeholder="Write CSS here"
            mode="css"
            theme="monokai"
            name="editor_css"
            fontSize="16"
            height={"100%"}
            width={"100%"}
            showPrintMargin={true}
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

export default CssEditor;
