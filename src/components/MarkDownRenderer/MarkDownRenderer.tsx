import remarkGfm from "node_modules/remark-gfm/lib";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import Image from "next/image";

const MarkDownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        h2: ({ ...props }) => (
          <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
        ),
        p: ({ ...props }) => <p className="my-4" {...props} />,
        ul: ({ ...props }) => (
          <ul className="!list-disc pl-6 my-4" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="!list-decimal pl-6 my-4" {...props} />
        ),
        li: ({ ...props }) => <li className="my-2" {...props} />,
        strong: ({ ...props }) => <strong className="font-bold" {...props} />,
        img: ({ ...props }) => (
          <Image
            src={props.src as string}
            alt={props.alt ?? ""}
            width={(props.width as number) || 500}
            height={(props.height as number) || 500}
            className="w-full h-auto"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkDownRenderer;
