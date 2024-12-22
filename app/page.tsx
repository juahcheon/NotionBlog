import Image from "next/image";
import { BlogPosts } from "../components/posts";

export default function Page() {
  return (
    <section>
      <div className='flex items-center mb-8'>
        <Image
          src='/profile.jpg'
          alt='profile image'
          width={100}
          height={100}
          className='rounded-full mr-4'
        />
        <h1 className='text-xl font-semibold tracking-tighter'>
          안녕하세요, <br /> 저는 천주아입니다.
        </h1>
      </div>
      <p className='mb-4 font-semibold tracking-tighter'>
        저는 배움을 멈추지 않고 늘 달리는 프론트엔드 엔지니어 입니다.
      </p>
      <p className="mb-4">
        웹 트렌드에 맞춰 나아가는 것이 프론트엔드의 숙명이라 생각합니다. 배움을 두려워하지 않고 도전하는 것을 좋아합니다.
        평소 인터넷 페이지를 방문하며 느꼈던 불편함을 토대로 사용자의 편의성을 향상시키는 것을 목표로 합니다.
        또한 코드의 간결성을 많이 신경 쓰는 편입니다. 스스로를 발전시킬 수 있는 업무 환경을 선호합니다.
      </p>
      <div className='my-8'>
        <BlogPosts />
      </div>
      <section>
        <div className="university">
          <label>학력</label>
          <p>창원대학교</p>
          <p>국어국문학과, 2015 입학 - 2022 졸업</p>
        </div>
        <div className="programming">
          <label>프로그래밍 역량</label>
          <ul>
            <li>
              <label>FrontEnd</label>
              <p>리액트의 Component와 Hook에 대해 완벽히 이해하고 있으며 응용</p>
              <p>Next.JS의 다양한 라우터 방식을 이용한 컴포넌트 제작 및 TypeScript를 이용한 Type 지정</p>
              <p>HTML/CSS/JavaScript로 원하는 페이지 제작이</p>
              <p>Dothome, S3, Vercel 등 다양한 플랫폼을 이용한 웹사이트 제작</p>
              <p>Figma 프로그램을 사용하여 디자인 및 프레젠테이션</p>
            </li>
            <li>
              <label>BackEnd</label>
              <p>Spring Boot 툴을 이용해 JSP 파일 작성</p>
              <p>JAVA 언어로 서버에 데이터를 보내고 받기</p>
              <p>mySQL로 데이터 모델링</p>
              <p>supabase, postman 등 다양한 프로그램으로 테이블 관리</p>
            </li>
            <li>
              <label>Communication</label>
              <p>Git Commit 및 Git Page 생성</p>
              <p>Notion을 이용한 소통 가능</p>
              <p>팀프로젝트를 통해 APi, EndPoint 등을 다뤄봄</p>
            </li>
          </ul>
        </div>
        <div className="study">
          <label>외부 교육 과정</label>
          <ul> [스마트웹&콘텐츠개발]풀스택 자바웹개발자
            <li>- 교육 기관 : 이젠아카데미컴퓨터학원</li>
            <li>- 교육 내용</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
