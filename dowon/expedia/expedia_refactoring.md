#Expedia HTML 구조화 하기
---
###체크해야 할 사항

1.[웹표준 준수] HMTL 문법은 유효한가?
2.[접근성 고려] 사용자 입장에서 접근하는데 문제가 없는가? (음성 출력/키보드 접근 등)
3.[의미 구조화] HTML 구조는 올바른 의미를 가지는가?
4.[코드 최적화] 불 필요한 <div> 또는 <span> 요소의 남용은 없었는가?
5.[팀원간 소통] 코드는 읽기 쉽고, 간결한가?


###Expedia HTML Markup Validation 결과!
 error 발생 & 수정


`<label>` `<input checkbox> ` input에 id 넣어주기
```
<label for="nonstop_check">
    <input id="nonstop_check" type="checkbox">직항노선만 검색하기
</label>
```

`<input>`요소가 `<lable>`요소 내에 존재할 때에는 for와 id 값 생략 가능
```
<label>
    <input type="checkbox">직항노선만 검색하기
</label>
```



`<ul>` 요소 안에는 `<li>` 만 들어갈 수 있음
```
<ul>
    제휴 서비스
    <li><a href="#">호텔추가</a></li>
</ul>
```

제휴 서비스를 `<li>` 로 감싸줌
```
<ul>
    <li>제휴 서비스</li>
    <li><a href="#">호텔추가</a></li>
</ul>
```



<select>의 name id는 중복이 될 수 없음 
<select>의 id값을 regitster-language_2로 수정
```
<select name="regitster-language_2" id="regitster-language_2">
   <option value="English">English(영어)</option>
   <option value="Korean">Korea(한국어)</option>
</select>
```
 ** 같은 역할을 하는 부분이 header에 존재 
   같은 기능을 하는 두개의 select 박스를 연결하는 방법 없을까?  -->고민사항! 



`<input type="button">에 value 값이 없어 error발생
HTML 구조상 botton이 아닌 것 같아 type=text 로 변경   
```
<label for="schedule">일정</label>
<input id="schedule" type="button">
```
  ** 클릭 시 달력이 실행되는 부분으로 text 도 어색한 것 같아 구현 방법 고민중 


---
###Team code review 후 수정사항 

<head> 영역에 `<meta>` 추가 
```
<meta http-equiv="X-UA-Compatible" content="IE=Edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="keywords" content="">
```


`<title>` 에 내용 추가
```
<title>호텔 예약, 항공권, 에어텔 | 익스피디아 (Expedia)</title>
```


언어설정을 `en` 에서 `ko-KR` 로 수정하고 
영어로 된 컨텐츠 부분에 <lang="en"> 속성 추가
```
<html lang="ko-KR">
:
<option lang="en" value="English">English</option>
```


`<header>` 안에 `<h1>` Element를 추가함으로써 제목 
```
<header>
    <h1><img src="#" alt="Expedia로고"></h1>
</header>
```



웹 표준에 어긋나지는 않지만 `<header>` 요소안에 
Sectioning Element 인 `<nav>` 이 자식요소로 들어가는것에 대한 고민!
`<nav>` 감싸줬던 부분을 `<div>`로 수정 후 클래스로 nav 영역지정
```
<div class="header-nav">
```