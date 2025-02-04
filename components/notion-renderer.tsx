'use client'
import { _Block, Notion } from "@notionpresso/react";

interface Post {
  title: string;
  content: {
    blocks: _Block[];  // blocks는 NotionBlock 배열로 정의
  };
  image?: string;  // 선택적 이미지 필드
}

export default function NotionRenderer({ post }: { post: Post }) {
  return (
    <Notion>
      <Notion.Cover src={post.image} />
      <Notion.Body>
        <Notion.Title title={post.title} />
        <Notion.Blocks blocks={post.content.blocks} />
      </Notion.Body>
    </Notion>
  )
}