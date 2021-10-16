import { useStaticQuery, graphql } from "gatsby"

const useTattoo = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulCard {
          edges {
            node {
              image {
                gatsbyImageData(width: 350)
                title
              }
            }
          }
        }
      }
    `
  )
  return data.allContentfulCard.edges.map(i => i.node.image)
}

export default useTattoo
