import MarkdownIt from 'markdown-it';

interface PropType {
    content: string;
}

const markdownDisplay = ({ content }: PropType) => {
    const md = new MarkdownIt({
        html: false,
        breaks: true,
        linkify: true,
    });
    return (
        <span dangerouslySetInnerHTML={{
            __html: md.render(content)
        }}></span>
    )
}

export default markdownDisplay;
