import MarkdownIt from 'markdown-it';
import highlightJs from 'highlight.js';
import 'highlight.js/styles/base16/darcula.css';

interface PropType {
    /** markdown content */
    content: string;
}

/** マークダウン書式をHTMLに変換 */
const markdownDisplay = ({ content }: PropType) => {
    const md: MarkdownIt = new MarkdownIt({
        html: false,
        breaks: true,
        linkify: true,
        highlight: function (str, lang) {
            if (lang && highlightJs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        highlightJs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                        '</code></pre>';
                } catch (__) {}
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
    });
    return (
        <span dangerouslySetInnerHTML={{
            __html: md.render(content)
        }}></span>
    );
}

export default markdownDisplay;
