### 네이트 회원가입 실습
- http://www.nate.com/?f=autorefresh

####Question
- 1. 태선 :div대신 table 구조를 두개로 하나?
- 2. div와 section을 선택하는 방법?
- 3. id는 고유값인데 부모가 없는 최상단 요소에서 쓰는건가?
- * form, aria 경우는 id를 넣고 디자인 가이드 상 class를 쓰자. id는 css lint에서 경고가 뜨고 또 class 처럼 재사용성을 가지기가 어렵다.
- 4. <img> alt 대신에 span nate 인지
- 5. hide로 처리 ?
- 6. 중간 hr을 왜 display=none;
- 7. table summary 비표준
- 8. colgroup은 왜 써줬는가?
- 9. ime-mode:disabled?
- 10. <address>는 footer에 주소값

11. 이 코드는 activeX 코드 인가요?
```html
<div id="activeXInner" style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;"><!-- activeX, flash 콘텐츠 이용 안내 문구 추가(start) --><div tabindex="0" class="notificationMsg"><p>회원 가입을 위해 추가 실행이 필요합니다. 알트키와 엔키를 눌러서 추가 기능을 실행할 수 있습니다. </p></div><!-- activeX, flash 콘텐츠 이용 안내 문구 추가(end) --></div>
```

12. 코드가 이해 되지만 구조적으로 이런걸 넣어준 이유?
```html
<div id="skipNav"><a href="#contents">본문바로가기</a></div>
  <a href="#contents">본문바로가기</a>
</div>
```

13. a태그 css 이미지 처리 인가? img를 구조적으로 넣어주지 않아도 될까?
```html
<h1><a href="http://www.nate.com/"><span class="hide">NATE</span></a></h1>
```

14. text를 숨긴 이유를 알겠는데 이미지는 어떻게 넣은 것인가?
그리고 1 약관동의 앞에 동그라미는 각각의 이미지 인건가?
아래 hr은 display:none 의미상 프로필입력으로 넘어가는 구분선 인가?
```html
<div id=header>
<ol class="depth2 trackerMail">
				<li><span class="hide">약관동의</span></li>
				<li><span class="hide">정보입력</span></li>
				<li><span class="hide">본인확인</span></li>
				<li><span class="hide">메일전송완료</span></li>
			</ol>
</div>
<hr>
```

15. table 사이즈를 잡기 위한 것 같은데 `*`은 무슨의미 인가?
```html
<colgroup>
								<col width="117">
								<col width="*">
							</colgroup>
```

ㅎㅎ
