import { useStaticQuery, graphql } from "gatsby"

const useTattoo = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulPortafolio {
          edges {
            node {
              image {
                gatsbyImageData(
                  height: 350
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
                title
              }
            }
          }
        }
      }
    `
  )
  return data.allContentfulPortafolio.edges.map(i => i.node.image)
}

export default useTattoo
