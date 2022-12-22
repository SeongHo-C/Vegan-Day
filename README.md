<div align="center">

<!-- logo -->
<img src="https://user-images.githubusercontent.com/83394485/209130761-336e95c4-5300-40fa-ac59-1cca01d93d5e.png" width="200"/>


### 비건 데이 🌿
[<img src="https://img.shields.io/badge/프로젝트 기간-2022.08.14~2022.08.29-88b04b?style=flat&logoColor=white" />]()

</div> 

## 📝 소개
비건 정보 공유, 식품 성분 분석 기능, 비건 식당 지도 서비스 등을 포함하는 비건 소통(커뮤니티) 플랫폼 입니다.

<br />

### 목적
<b>[비건인들의 어려움 해소]</b>

"비건 데이"를 통해 비건으로서 겪는 어려움을 해소하여 향상된 비거니즘 생활을 누릴 수 있습니다.

<b>[비거니즘 커뮤니티 활성화]</b>

하나로 통합된 비거니즘 커뮤니티로 비건 정보 공유 및 모임을 통해 비거니즘 커뮤니티 활성화를 기대할 수 있습니다.

<b>[비건 시장 경제 발전]</b>

늘어나는 수요에 따라 비건 시장 경제가 발전하고 "비건" 키워드가 하나의 경제 트렌드로 더욱 급부상 할 것을 기대할 수 있습니다.

<br />

### 화면 구성
| 화면 | <center>설명</center> |
|:----:|----|
| <img src="https://user-images.githubusercontent.com/83394485/209134145-234250cf-05f9-4a77-bebc-6565fdca817d.png" width="250" height="400"/>|<b>[회원가입 및 로그인]</b></br></br>Google Oauth 2.0 API를 사용하여 구글 계정을 가진 </br>누구나 소셜 로그인 가능 </br></br>회원 등록된 사용자만이 글쓰기가 가능 </br>회원이 아닐 경우, 읽기 권한만을 가짐 </br></br>회원정보는 암호화되어 DB에 저장|
| <img src="https://user-images.githubusercontent.com/83394485/209139801-e9352949-dd5f-43e1-b0f4-fa62e6321b54.gif" width="250" height="400"/>|<b>[정보 공유 커뮤니티]</b></br></br>내가 알고 있는 비건 정보를 쉽게 공유 </br>- 게시글을 등록 </br>- 댓글을 통해 게시글에 대한 의견을 나눌 수 있음 </br></br>인기 게시글 Best 5를 확인할 수 있음 </br></br>이미지 파일 업로드 시 발생할 수 있는 취약점 방지 </br>- 화이트리스트 방식으로 확장자 제한 </br>- 업로드 파일명 및 저장 경로를 외부에서 알 수 없도록 </br>변경하여 저장|
| <img src="https://user-images.githubusercontent.com/83394485/209156129-4ddac08c-a6d4-46d4-b68a-ad2c178e0879.gif" width="250" height="400"/>|<b>[OCR 비건 정보 분석]</b></br></br>애플리케이션에 내장된 카메라로 성분분석표를 촬영 시, </br>해당 식품의 비건 여부를 판단 </br></br>동물성 성분이 없을 경우, 비건 식품임을 알림 </br></br>Naver Clova OCR을 활용하여 인식된 텍스트가 서버에 </br>넘겨진 후, 해당 글자에 동물성 성분이 있는지를 진단하여 </br>사용자에게 보여줌|
| <img src="https://user-images.githubusercontent.com/83394485/209156466-1a9fb62c-f137-40a5-8898-e84a6a286888.gif" width="250" height="400"/>|<b>[비건 제품 Mall]</b></br></br>3가지의 카테고리(음식/화장품/용품)으로 확인하는 </br>비건 제품 </br></br>네이버 검색 API를 사용하여 네이버 쇼핑으로 바로 이동</br>하여 상품 구매 가능|
| <img src="https://user-images.githubusercontent.com/83394485/209157208-2353e889-c6ca-487d-9e22-9f8f7dbc86a9.gif" width="250" height="400"/>|<b>[비건 지도]</b></br></br>식당, 카페 뿐만 아닌 제로 웨이스트 샵 등 비거니즘을 </br>실천할 수 있는 장소를 마커로 표시 </br></br>해당 장소의 정보, 주소, 메뉴 등을 확인 가능 </br></br>최신 업데이트 된 정보로 기존 비건 플랫폼의 정보 </br>관리문제 개선|
| <img src="https://user-images.githubusercontent.com/83394485/209158213-26b934ec-199e-41ef-a355-cbd92ef42c12.gif" width="250" height="400"/>|<b>[텔레그램 게시글 알림(현장 미션)]</b></br></br>관리자를 위한 알림 기능을 적용하여 사용자가 작성한 </br>커뮤니티 글을 텔레그램 메시지를 통해 확인하고 관리 </br></br>관리자의 빠른 게시물 관리로 오직 비건만을 위한 </br>게시판으로 발돋음|
| <img src="https://user-images.githubusercontent.com/83394485/209159626-9f9a8485-917a-44ad-9bc9-2416325096e2.gif" width="250" height="400"/>|<b>[캡처 공유(현장 미션)]</b></br></br>화면 전송 버튼을 통해 자신이 보고 있는 페이지의 </br>이미지를 메일로 전송 받음 </br></br>Gmail 서버에 대한 정보를 외부 파일에 저장하여 </br>취약점 방지 </br></br> 화이트리스트 방식으로 확장자 제한하여 캡처 파일 </br>저장 시 발생할 수 있는 보안 문제 해결|

<br />

## ⚙ 기술 스택
### Front-end
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/PostCSS.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/ReactNative.png?raw=true" width="80">
</div>

### Tools
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
</div>

<br />

## 🤔 기술적 이슈와 해결 과정
- 키보드가 TextInput 창을 가려 입력 값 확인 불가
    - [키보드가 TextInput창을 안 가리도록 해보자! (KeyboardAwareScrollView)](https://leeseong010.tistory.com/37)
- (현장 미션) 버튼을 클릭하여 현재 화면을 캡처한 후 이메일로 전송
    - [버튼을 클릭하여 현재 화면을 캡처해보자❗](https://leeseong010.tistory.com/43)
    
<br />

## 💁‍♂️ 프로젝트 팀원
|Frontend|Frontend|Backend|Backend|
|:---:|:---:|:---:|:---:|
| ![](https://github.com/SeongHo-C.png?size=120)| ![](https://github.com/hayeon.png?size=120) | ![](https://github.com/yewon-Noh.png?size=120) | ![](https://github.com/songhwee1.png?size=120) |
|[이성호](https://github.com/SeongHo-C)|[양하연](https://github.com/hayeon)|[노예원](https://github.com/yewon-Noh)|[송휘](https://github.com/songhwee1)|

