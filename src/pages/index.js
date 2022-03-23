import React, {Component} from 'react';
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import get from 'lodash/get'
import ArticlePreview from "../components/article-preview"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"


class IndexPage extends Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <Seo title="Home" />

        <section>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center'>
            <div className='text-center text-blue'>
              <h1>Learnings<span className='text-accent-blue'>.</span></h1>
            </div>
            <div>
              <ul className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none list-none">
                {posts.map(({ node }) => {
                    return (
                        <li key={node.slug}>
                            <ArticlePreview article={node} />
                        </li>
                    )
                })}
              </ul>
            </div>
            <div className="text-center">
              <Link to="/blog" className="text-blue font-bold uppercase border-b-4">Visit Blog</Link>
            </div>
          </div>
        </section>

        <ContactForm />
        <Newsletter />
      </Layout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeBlogQuery {
    allContentfulBlogPost(limit: 3) {
    edges {
      node {
        title
        slug
        postDate(formatString: "MMMM d, yyyy")
        featuredImage {
          file {
            url
          }
        }
        category {
            name
        }
      }
    }
  }
  }
`