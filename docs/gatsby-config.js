const { cleanDoclets } = require("gatsby-transformer-react-docgen/doclets")
const path = require("path")

const defaultDescriptions = require("./src/defaultPropDescriptions")
module.exports = {
  siteMetadata: {
    title: `Trimble Modus React Bootstrap Developer Guide`,
    titleTemplate: "%s",
    description: `The Modus React Bootstrap is a React-based component library extended from react-bootstrap`,
    author: `Trimble Inc.`,
    url: `https://modus-react-bootstrap.trimble.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "../src"),
        name: "docs",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/layouts/MainLayout.tsx"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [
          {
            // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
            name: "en",
            // A function for filtering nodes. () => true by default
            filterNodes: node => node.frontmatter && node.frontmatter.title,
          },
        ],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "description", store: true, attributes: { boost: 5 } },
          { name: "url", store: true },
          { name: "content" },
        ],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            url: node => node.fields.slug,
            content: node => node.rawBody,
          },
        },
        filename: "search_index.json",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `modus-react`,
        short_name: `modus-react`,
        start_url: `/`,
        icon: `src/assets/img/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-react-docgen",
      options: {
        resolver: require("./resolveHocComponents"),
        handlers: [
          function defaultDescriptionsHandler(docs) {
            docs._props.forEach((_, name) => {
              if (defaultDescriptions[name]) {
                let prop = docs.getPropDescriptor(name)
                let dflt = defaultDescriptions[name]

                if (dflt && !cleanDoclets(prop.description))
                  prop.description = `${dflt}\n${prop.description}`
              }
            })
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"],
      },
    },
  ],
}
