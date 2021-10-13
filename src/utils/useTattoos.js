import { useStaticQuery, graphql } from "gatsby"

const useTattoo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStoryblokEntry {
        nodes {
          field_image_string
        }
      }
    }
  `)
  // return data.allContentfulCards.nodes.map(card => ({
  //   link: card.link,
  //   icon: card.icon.gatsbyImageData,
  //   cardText: card.cardText,
  // }))
  return console.log(data.allStoryblokEntry.nodes)
}

export default useTattoo
