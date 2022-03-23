import React, {Component} from 'react';
import Layout from "../components/layout"
import {graphql} from "gatsby";
import get from "lodash/get";

class BlogPostTemplate extends Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')

        return (
            <>
            <Layout>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center pt-12 pb-6">
                    <div className="mb-10">
                        <h2 className="pb-5 text-2xl sm:text-5xl sm:leading-tight">{post.title}</h2>
                    </div>
                    <div className="mb-5">
                    </div>
                    <div>
                        <p className="font-light text-sm sm:text-xs">Published {post.postDate}</p>
                    </div>
                </div>

                <div>
                    <img src={post.featuredImage.file.url} className="sm:h-screen w-full"/>
                </div>

                <section>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 font-light">
                    </div>
                </section>
            </Layout>
                </>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
   query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
                title
                slug
                featuredImage {
                  file {
                    url
                  }
                }
                postDate(formatString: "MMMM d, yyyy")
                
      }
   }
`