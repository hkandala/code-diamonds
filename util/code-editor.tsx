import { Display, Divider, Select } from "@geist-ui/react";
import { useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/mode-autohotkey";
import "ace-builds/src-noconflict/mode-clojure";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-matlab";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-powershell";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-sh";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-typescript";

const languages: any = {
  assembly_x86: "Assembly x86",
  autohotkey: "AutoHotKey",
  clojure: "Clojure",
  csharp: "C#",
  css: "CSS",
  c_cpp: "C/C++",
  dart: "Dart",
  dockerfile: "Dockerfile",
  elixir: "Elixir",
  golang: "Go",
  haskell: "Haskell",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  latex: "LaTeX",
  kotlin: "Kotlin",
  matlab: "Matlab",
  perl: "Perl",
  php: "PHP",
  powershell: "PowerShell",
  python: "Python",
  r: "R",
  ruby: "Ruby",
  rust: "Rust",
  sass: "Sass",
  scala: "Scala",
  scss: "SCSS",
  sh: "Shell",
  sql: "SQL",
  typescript: "TypeScript",
};

const CodeEditor = (props: any) => {
  return (
    <>
      {!props.readOnly ? (
        <Display shadow className="code-editor">
          <div
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Select
              placeholder="Choose one"
              initialValue={props.mode}
              onChange={props.onModeChange}
            >
              {Object.keys(languages).map((mode: string) => (
                <Select.Option key={mode} value={mode}>
                  {languages[mode]}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Divider />
          <AceEditor
            name="code-editor"
            placeholder="Type your art piece!"
            mode={props.mode}
            theme="xcode"
            width={props.width}
            height={props.height}
            onChange={props.onChange}
            fontSize={16}
            tabSize={2}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            wrapEnabled={true}
            readOnly={props.readOnly}
            value={props.value}
            setOptions={{
              showLineNumbers: false,
            }}
            style={{ margin: "30px" }}
          />
        </Display>
      ) : (
        <AceEditor
          name="code-editor"
          mode={props.mode}
          theme="xcode"
          width={props.width}
          height={props.height}
          fontSize={16}
          tabSize={2}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          wrapEnabled={true}
          readOnly={props.readOnly}
          value={props.value}
          setOptions={{
            showLineNumbers: false,
          }}
        />
      )}
    </>
  );
};

export default CodeEditor;
export { languages };
