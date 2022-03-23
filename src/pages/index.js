import React, {Component} from 'react';
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import get from 'lodash/get'
import ArticlePreview from "../components/article-preview"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"

import communityIcon from '../images/community-icon.svg'
import beachHouse from '../images/beach-img.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


class IndexPage extends Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <Seo title="Home" />

        <section>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
            <div className='text-center text-blue mb-12'>
              <h1>How we work<span className='text-accent-blue'>.</span></h1>
            </div>
            <div>
              <p className='text-slate-grey'>We were founded in 2018 on the basis that short term rentals are the future of hospitality. Over the last 4 years, our projections have been exceeded time and time again, only cementing our belief in the space.</p>
              <p className="mt-5 text-slate-grey">Our guiding values are a direct response to what we’ve seen work best in the space. Through sharing our learnings and experience, we hope to strengthen current and future operators.</p>
            </div>
          </div>
          <div className=''>
            <div className='pl-4'>
              <p className="font-bold text-accent-blue mb-3">Our values</p>
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1.2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='ml-4'>
                <div className='shadow-blue/[.10] shadow-lg mb-6 mr-1 py-3 px-4 '>
                  <img src={communityIcon}/>
                  <h3 className='mb-3 text-blue'>Community</h3>
                  <p className='text-sm text-slate-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='shadow-blue/[.10] shadow-lg mb-6 mr-3 py-3 px-3 '>
                  <img src={communityIcon}/>
                  <h3 className='mb-3 text-blue'>Community</h3>
                  <p className='text-sm text-slate-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='shadow-blue/[.10] shadow-lg mb-6 mr-3 py-3 px-3 '>
                  <img src={communityIcon}/>
                  <h3 className='mb-3 text-blue'>Community</h3>
                  <p className='text-sm text-slate-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='shadow-blue/[.10] shadow-lg mb-6 mr-3 py-3 px-3 '>
                  <img src={communityIcon}/>
                  <h3 className='mb-3 text-blue'>Community</h3>
                  <p className='text-sm text-slate-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div>
            <img src={beachHouse}/>
          </div>
          <div className='bg-light-blue'>
            <div className='px-4 py-6'>
              <h2 className='mb-4'>Our Favorite Forest Getaways</h2>
              <p className='mb-4 text-slate-gray'>Check out our favorite cabins that are sure to leave you feeling grounded, relaxed and rejuvinated.</p>
              <Link to="/blog" className="text-accent-blue font-extrabold uppercase border-b-4">Explore</Link>
            </div>
          </div>
        </section>

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