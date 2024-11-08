"use client";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id='comments'
      repo='juahcheon/NotionBlog'
      repoId='R_kgDONKv4sw'
      category='Announcements'
      categoryId='DIC_kwDONKv4s84CkGAa'
      mapping='pathname'
      strict='0'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='bottom'
      theme='preferred_color_scheme'
      lang='ko'
      loading='lazy'
    />
  );
}
