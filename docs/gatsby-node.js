const path = require(`path`)
const express = require("express")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"))
}
