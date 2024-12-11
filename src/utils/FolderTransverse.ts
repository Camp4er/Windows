interface Folder {
  name: string;
  type: 'folder' | 'file';
  contents: { [key: string]: Folder };
}

const traverseFolder = (folder: Folder, path: string[] = []): string[] => {
  const newPath = [...path, folder.name];
  if (folder.type === 'folder') {
    const subfolders = Object.keys(folder.contents);
    return [...newPath, ...subfolders.flatMap((key) => traverseFolder(folder.contents[key], newPath))];
  } else {
    return newPath;
  }
};

export default traverseFolder;