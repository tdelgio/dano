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
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                  width: 300
                )
                title
                description
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
