import { useStaticQuery, graphql } from "gatsby"

const useText = () => {
  const data = useStaticQuery(
    graphql`
      query TextQuery {
        allContentfulBio {
          edges {
            node {
              title
              text
              textLong {
                textLong
              }
            }
          }
        }
      }
    `
  )
  return data.allContentfulBio.edges.map(i => ({
    title: i.node.title,
    textPrimary: i.node.text,
    textSecondary: i.node.textLong.textLong,
  }))
}

export default useText
