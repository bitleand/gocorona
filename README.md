## Gulp 4

`gulp`
Basic command that runs a development build using browser-sync.

`gulp build` 
Command for the production assembly of the project. All assets are compressed and optimized for hosting.

`gulp cache`
A command to run after `gulp build` if you need to upload new files to your host without caching.

`gulp backend`
Command for the backend build of the project. It is devoid of unnecessary things from the dev build, but not compressed, for the convenience of the backend.

`gulp zip`
Command collects your finished code into a zip archive.

## Folder and file structure

```
├── src/                          # sources
│   ├── js                        # scripts
│   │   └── main.js               # main script
│   ├── scss                      # site styles (sass preprocessor in scss syntax)
│   │   └── main.scss             # main style file
│   │   └── vendor.scss           # file for connecting library styles from the vendor folder
│   │   └── _fonts.scss           # file for connecting fonts (you can use a mixin)
│   │   └── _vars.scss            # file for writing css or scss variables
│   │   ├── components            # components scss
│   ├── partials                  # folder to store the html parts of the page
│   ├── img                       # folder for storing pictures
│   │   ├── svg                   # special folder to convert svg to sprite
│   ├── resources                 # folder for storing other assets - php, video files, favicon, etc.
│   │   ├── fonts                 # folder for storing fonts in woff2 format
│   └── index.html                # main html file
└── gulpfile.js                   # gulp settings file
└── package.json                  # file with build settings and installed packages
└── .editorconfig                 # file with code formatting settings
└── .ecrc                         # package settings file editorconfig-checker (excludes unnecessary folders)
└── .stylelintrc                  # stylelint settings file
└── README.md                     # assembly documentation
```