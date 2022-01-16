import { Card, Divider, Spacer, Tag, Text } from "@geist-ui/react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("../util/code-editor"), {
  ssr: false,
});

const NftCard = (props: any) => {
  return (
    <Card shadow style={{ margin: "10px" }}>
      <div
        style={{
          width: props.cardWidth,
          height: props.cardHeight,
          position: "relative",
        }}
      >
        {props.showSnippet ? (
          <div
            style={{
              border: 0,
              position: "absolute",
              top: -(props.height - props.cardHeight) / 2 + "px",
              left: -(props.width - props.cardWidth) / 2 + "px",
              transform: "scale(" + props.cardWidth / props.width + ")",
              overflow: "hidden",
            }}
          >
            <CodeEditor
              mode={props.language}
              width={props.width + "px"}
              height={props.height + "px"}
              readOnly={true}
              value={atob(props.code)}
            />
          </div>
        ) : (
          <iframe
            width={props.width}
            height={props.height}
            srcDoc={atob(props.code)}
            style={{
              border: 0,
              position: "absolute",
              top: -(props.height - props.cardHeight) / 2 + "px",
              left: -(props.width - props.cardWidth) / 2 + "px",
              transform: "scale(" + props.cardWidth / props.width + ")",
              overflow: "hidden",
            }}
          ></iframe>
        )}
      </div>
      <Spacer h={1} />
      <Divider />
      <Text h5>{props.name}</Text>
      <Text p>{props.description}</Text>
      <Tag>Unlisted</Tag>
    </Card>
  );
};

export default NftCard;
