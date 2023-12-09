import * as fs from 'fs';
import * as path from 'path';

export { };

const docsDirectory = 'content/docs';
const baseUrl = 'https://stormkit.io/docs';

const removeSearchDocsFile = () => {
  const filePath = 'src/search-docs.json';
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed existing ${filePath}`);
  }
};

const generateSearchDocsJson = (files) => {
  const documents = files.map((file, index) => {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/---([\s\S]*?)---([\s\S]*)/);

    if (match && match[1] && match[2]) {
      const metadata = match[1];
      const text = match[2].trim();
      const doc = {};

      metadata.split('\n').forEach((line) => {
        const [key, value] = line.split(':').map((item) => item.trim());
        doc[key] = value;
      });

      const fileNameWithoutExtension = path.basename(file, path.extname(file));
      // same logic taken from route
      const tmpPath = fileNameWithoutExtension
        .replace('/content', '')
        .split('--')
        .join('/')
        .replace(/\/\d+-/, '/')

      const url = `${baseUrl}/${tmpPath}`;


      return {
        id: index + 1,
        title: doc.title,
        description: doc.description,
        url,
      };
    } else {
      console.error(`Error parsing file: ${file}`);
      return null;
    }
  });

  const filteredDocuments = documents.filter((doc) => doc !== null);

  const output = JSON.stringify(filteredDocuments, null, 2);
  removeSearchDocsFile();
  fs.writeFileSync('src/search-docs.json', output, 'utf8');
};

const getMarkdownFiles = (dir) => {
  const files = fs.readdirSync(dir);
  const markdownFiles = files.filter((file) => path.extname(file) === '.md');
  return markdownFiles.map((file) => path.join(dir, file));
};

const mdFiles = getMarkdownFiles(docsDirectory);
generateSearchDocsJson(mdFiles);
