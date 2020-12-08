/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useUriInfo, initializeHeadlessProps } from '@wpengine/headless';
import { GetServerSidePropsContext } from 'next';
import Posts from '../lib/components/Posts';
import Post from '../lib/components/Post';

export default function Page() {
  const pageInfo = useUriInfo();

  if (!pageInfo) {
    return <></>;
  }

  if (pageInfo.isPostsPage) {
    return <Posts />;
  }

  return <Post />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return initializeHeadlessProps(context);
}