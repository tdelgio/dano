import { useStaticQuery, graphql } from "gatsby"

const useText = () => {
  const data = useStaticQuery(
    graphql`
      query TextQuery {
        allContentfulBio {
          edges {
            node {
              title
              textSecondary
              textRich {
                raw
              }
              text
            }
          }
        }
      }
    `
  )
  return data.allContentfulBio.edges.map(i => ({
    title: i.node.title,
    textPrimary: i.node.text,
    textSecondary: i.node.textSecondary,
    textRich: i.node.textRich.raw,
  }))
}

export default useText
