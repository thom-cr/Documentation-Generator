# Documentation de Documentation_Generator
* __DocumentationGenerator__ :
   * **Fonction DocumentationGenerator** :
     * Function called by DocumentationGenerator component to generate output file (PDF and/or MD) with the help of WritePDF and WriteMarkdown
* __FileParsing__ :
   * **Fonction FileParsing** :
     * Used to parse files and only keep the ones with desired extensions
* __FilesArray__ :
   * **Fonction FilesArray** :
     * Use to display the files selected by FileSelector or FolderSelector. It updates based on the extensions input.
* __FilesArraySelection__ :
   * **Fonction FilesArraySelection** :
     * returns dictionnary with fileName and extensions
* __FilesSelector__ :
   * **Fonction FilesSelector** :
     * Used to select the files
* __FilterFiles__ :
   * **Fonction FilterFiles** :
     * Can filter files based on the selected extensions and returns the array of filtered files.
* __FolderSelector__ :
   * **Fonction FolderSelector** :
     * Used to select a folder
* __GetAllFiles__ :
   * **Fonction GetAllFiles** :
     * Catch files recursively in subdirectories
* __OutputNameFileMarkdown__ :
   * **Fonction OutputNameFileMarkdown** :
     * Add .md at the end of projectName
* __OutputNameFilePDF__ :
   * **Fonction OutputNameFilePDF** :
     * Add .pdf at the end of projectName
* __OutputTitleMarkdown__ :
   * **Fonction OutputTitleMarkdown** :
     * Add Markdown syntax
* __OutputTitlePDF__ :
   * **Fonction OutputTitlePDF** :
     * Add PDF syntax
* __ToArrayExtensions__ :
   * **Fonction ToArrayExtensions** :
     * Transform extensions string into an array
* __WriteMarkdown__ :
   * **Fonction WriteMarkdown** :
     * Use file-saver to generate the Markdown file
* __WritePDF__ :
   * **Fonction WritePDF** :
     * Use jspdf to generate the final pdf file