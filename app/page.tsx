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
          안녕하세요, <br /> 
          저는 프론트엔드 엔지니어 천주아입니다.
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
      <section className="mt-10">
        <div className="university border-t mb-6 pb-4 pt-10 flex items-top">
          <label className="font-semibold mr-6 pl-6 text-lg">학력</label>
          <div>
            <p>창원대학교</p>
            <p className="mt-2">국어국문학과, 2015 입학 - 2022 졸업</p>
          </div>
        </div>
        <div className="programming border-t mb-6 pb-8 pt-10">
          <label className="font-bold mr-6 pl-6 text-lg">프로그래밍 역량</label>
          <ul className="pl-6 mt-4">
            <li className="flex mb-6">
              <label className="mr-4 font-semibold">FrontEnd</label>
              <div className="ml-14">
                <p>리액트의 Component와 Hook에 대해 완벽히 이해하고 있으며 응용</p>
                <p className="mt-1">Next.JS의 다양한 라우터 방식을 이용한 코드 작성 및 TypeScript를 이용한 Type 지정</p>
                <p className="mt-1">HTML/CSS/JavaScript로 다양한 페이지 제작</p>
                <p className="mt-1">Dothome, S3, Vercel 등 다양한 플랫폼을 이용한 웹사이트 제작</p>
                <p className="mt-1">Figma 프로그램을 사용하여 디자인 및 프레젠테이션</p>
              </div>
            </li>
            <li className="flex mb-6">
              <label className="mr-4 font-semibold">BackEnd</label>
              <div className="ml-14">
                <p>Spring Boot 툴을 이용해 JSP 파일 작성</p>
                <p className="mt-1">JAVA 언어로 서버에 데이터를 보내고 받기</p>
                <p className="mt-1">mySQL로 데이터 모델링</p>
                <p className="mt-1">supabase, postman 등 다양한 프로그램으로 테이블 관리</p>
              </div>
            </li>
            <li className="flex">
              <label className="mr-4 font-semibold">Communication</label>
              <div>
                <p className="mt-1">Git Commit 및 Git Page 생성</p>
                <p className="mt-1">Notion을 이용한 소통 가능</p>
                <p className="mt-1">팀프로젝트를 통해 API, EndPoint 등을 다뤄봄</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="study border-t mb-6 pb-8 pt-10">
          <label className="mr-4 font-semibold text-lg">외부 교육 과정</label>
          <ul className="pl-6 mt-4"> <b>[스마트웹&콘텐츠개발]풀스택 자바웹개발자</b>
            <li className="flex mt-4 mb-4">- 교육 기관 : 이젠아카데미컴퓨터학원</li>
            <li className="mb-6">
              - 교육 내용
              <p className="mb-2 mt-2 ml-4">1. HTML, CSS의 웹 퍼블리싱</p>
              <p className="mb-2 ml-4">2. Figma 프로그램 사용법</p>
              <p className="mb-2 ml-4">3. Java Script 프로그래밍</p>
              <p className="mb-2 ml-4">4. JAVA 객체지향 프로그래밍</p>
              <p className="mb-2 ml-4">5. 리눅스 서버 시스템 구축</p>
              <p className="mb-2 ml-4">6. 데이터베이스 SQL 활용</p>
              <p className="mb-2 ml-4">7. JAVA Database 프로그래밍</p>
              <p className="mb-2 ml-4">8. UI 구현</p>
            </li>
            <li className="flex mb-4">- 수행 프로젝트 : KINNI(미완성)</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
