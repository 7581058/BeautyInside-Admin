## 타임라인

프로젝트 생성 : 6월 12일

feature/#2 : 6월 12일 - 헤더 컴포넌트 추가

feature/#3 : 6월 14일 - 사이드 메뉴 컴포넌트 추가, 페이지 이동

admin_005 : 6월 15일 - 대시보드 레이아웃 구성

admin006 : 6월 15일 ~ 6월 16일
api 정리, 테스트
관리자 api 정리해서 api.ts 구성
제품 목록 상품관리 페이지에 출력, 수동으로 데이터 입력해서 추가 버튼 누르면 데이터 추가되게 테스트

admin008 : 6월 16일
상품 관리 페이지 레이아웃 구성
공통 보드 컴포넌트 구성, 게시판 형태 구성, 상품관리 버튼, 드롭다운 구성, 페이지네이션 구성

admin010 : 6월 16일 ~ 6월 18일
상품 관리 페이지 기능 구현
상품 삭제,
상품 등록 페이지로 이동,
드롭다운 정렬 (정렬 초기화 나중에 수정하기)
게시판 전반적인 기능(페이지네이션),

admin014: 6월 18일 ~ 6월 19일
상품 관리 - 상품등록 페이지 레이아웃 구성 => 상품 수정이랑 동일한 컴포넌트로 사용할 수 있게
카테고리 드롭다운
상품명 입력
가격 입력
품절 여부 드롭다운
상세 설명 입력
상품 썸네일 입력
상품 상세 이미지 입력

admin015: 6월 19일
\*\* 폼 예외추가 - 상품 등록할때는 품절여부 입력안함
상품 관리 - 상품등록 기능 구현
카테고리 선택(립,아이,페이스)
상품명 입력받기
상품가격 입력받기
상품 상세 설명 입력 받기(최대100자)
상품 썸네일 입력받기
상품 상세 이미지 입력 받기

admin011: 6월 19일 ~ 6월 20일
상품 관리페이지에서 상품 클릭 시 상세 페이지로 이동
상품관리 상품 상세페이지 레이아웃 구성, 기능 구현
상품썸네일,카테고리,상품명,가격,
품절여부,상세설명,상세이미지,삭제버튼배치,수정버튼배치

admin013: 6월 20일
상품 상세 페이지에서 수정 버튼 클릭시 수정 페이지로 이동
상품 상세 페이지에서 삭제 버튼 클릭 시 상품 삭제 후 상품 목록 페이지로 이동

admin026: 6월 20일
수정하려는 상품 데이터 상품 수정 폼에 출력
수정 버튼 클릭 시 상품 수정
취소 버튼 클릭 시 수정하려던 상품 상세 페이지로 이동
뒤로가기 버튼 클릭 시 수정하려던 상품 상세 페이지로 이동

admin042: 6월 20일 ~ 6월 21일
사용자 목록 조회
사용자 목록 조회 페이지 추가, 레이아웃 구성
사용자 목록 출력

admin021: 6월 21일
거래 내역 관리 페이지 추가, 레이아웃 구성

admin022: 6월 21일
거래 내역 관리 상세 페이지 추가, 레이아웃 구성
거래 내역 데이터가 없어서 임시로 버튼 추가해서 화면이동하게 구성

admin027: 6월 21일
상품 목록 정렬 수정 - 립 제품만 정렬되던 문제 수정 + 코드 정리

admin049: 6월 21일
폰트적용, 테마 정리, 전반적인 디자인 정리

admin051: 6월 22일
상품관리 목록 넘버링수정

(051과 동시진행)
admin047: 6월 22일
사용자 목록 불러오기 수정

develop과 051 충돌 -> 충돌해결

admin028: 6월 22일
스피너 컴포넌트 추가 -> 상품목록페이지
목록없을때 예외처리 수정

admin032: 6월 23일
페이지네이션 처음,마지막 이동 구현

admin034: 6월 23일
체크박스 선택 삭제 오류 수정
=> 체크박스로 선택된 항목 0번째가 공백으로 들어감
=> 선택한 아이디 저장 변수 state로 변경

admin037: 6월 23일
게시판 쓰는 페이지들 출력 예외처리, 스피너 추가 또는 수정