import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Layout from "../components/layout";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location} post={post}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <article className="xl:divide-y xl:divide-gray-200">
          <header className="pt-6 xl:pb-10">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time datetime="2020-07-28T16:58:33.714Z">
                      {post.publishDate}{" "}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {post.title}
                </h1>
              </div>
            </div>
          </header>
          <div
            className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <img
                      src="https://miro.medium.com/fit/c/72/72/1*SsVe0TBfrDBn-gEj29itVw.jpeg"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900">Adam Wathan</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        <a
                          href="https://twitter.com/@adamwathan"
                          className="text-teal-500 hover:text-teal-600"
                        >
                          @adamwathan
                        </a>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div
                className="prose max-w-none pt-10 pb-8"
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
              <div className="pt-6 pb-16">
                <p>
                  Want to talk about this post?{" "}
                  <a
                    href="mailto:john@dotsavy.com"
                    className="font-medium text-teal-500 hover:text-teal-600"
                  >
                    Email us →
                  </a>
                </p>
              </div>
            </div>
            <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
              <div className="space-y-8 py-8">
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <a href="/tailwindcss-1-6">Tailwind CSS v1.6.0</a>
                  </div>
                </div>
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <a href="/welcoming-brad-cornes-to-the-tailwind-team">
                      Welcoming Brad Cornes to the Team
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <a className="text-teal-500 hover:text-teal-600" href="/">
                  ← Back to the blog
                </a>
              </div>
            </footer>
          </div>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
