const Diff = require('diff')

export default class DiffTools {
    static  getDiffHtml (text_base, text)
    {
        let diff = Diff.diffChars(text_base, text);
        //let diff = Diff.diffChars('trabajo', 'trabahar');
        let result = ''
        diff.forEach((part) => {
            // green for additions, red for deletions
            // grey for common parts
            const tag = part.added ? 'ins' :
              part.removed ? 'del' : 'span';
            result += "<" + tag + ">" + part.value + "</" + tag + ">"
          });
        return (result)
    }
}
