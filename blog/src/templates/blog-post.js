
import React from 'react';
import { graphql } from 'gatsby';
import {Layout} from '../components/layout';
import {H1} from '../components/Heading'

const BlogPost = ({ data }) => {
  const { title, body } = data.contentfulBlogPost;

  return (
    <Layout>
      <H1>{title}</H1>
      <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
    </Layout>
  );
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
//C:\Users\mke-perrym\Desktop\ITDEV2020\perry-moen\blog\src\templates\blog-post.js
