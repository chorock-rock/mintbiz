# mintbiz.io 도메인 연결 가이드

고대디에서 구매한 `mintbiz.io` 도메인을 Vercel에 연결하는 단계별 가이드입니다.

## 사전 준비

1. ✅ Vercel에 프로젝트가 배포되어 있어야 합니다
2. ✅ 고대디 계정에 로그인할 수 있어야 합니다
3. ✅ `mintbiz.io` 도메인이 고대디에서 활성화되어 있어야 합니다

## 단계별 연결 방법

### 1단계: Vercel에서 도메인 추가

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. **mintbiz** 프로젝트 선택
3. 상단 메뉴에서 **Settings** 클릭
4. 왼쪽 사이드바에서 **Domains** 클릭
5. **Add Domain** 버튼 클릭
6. `mintbiz.io` 입력
7. **Add** 클릭

### 2단계: DNS 레코드 확인

Vercel이 다음 중 하나의 방법을 제시합니다:

#### 방법 A: A 레코드 사용 (권장)
```
Type: A
Name: @
Value: 76.76.21.21 (또는 Vercel이 제공하는 IP 주소)
TTL: 3600
```

#### 방법 B: CNAME 레코드 사용
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com (또는 Vercel이 제공하는 도메인)
TTL: 3600
```

**참고**: Vercel이 제공하는 정확한 값을 사용하세요. 위 값은 예시입니다.

### 3단계: 고대디 DNS 설정

1. **고대디 로그인**
   - [godaddy.com](https://www.godaddy.com) 접속
   - 계정 로그인

2. **도메인 관리 페이지로 이동**
   - 상단 메뉴에서 **My Products** 클릭
   - **Domains** 섹션에서 `mintbiz.io` 찾기
   - `mintbiz.io` 옆의 **DNS** 또는 **Manage DNS** 클릭

3. **기존 레코드 확인**
   - 기존 A 레코드나 CNAME 레코드가 있다면 확인
   - 필요시 수정 또는 삭제

4. **새 DNS 레코드 추가**

   **A 레코드 사용 시:**
   - **Add** 또는 **+** 버튼 클릭
   - **Type**: `A` 선택
   - **Name**: `@` 입력 (또는 비워두기, 루트 도메인 의미)
   - **Value**: Vercel이 제공한 IP 주소 입력 (예: `76.76.21.21`)
   - **TTL**: `600` 또는 `3600` 선택
   - **Save** 클릭

   **CNAME 레코드 사용 시:**
   - **Add** 또는 **+** 버튼 클릭
   - **Type**: `CNAME` 선택
   - **Name**: `@` 입력
   - **Value**: Vercel이 제공한 도메인 입력 (예: `cname.vercel-dns.com`)
   - **TTL**: `600` 또는 `3600` 선택
   - **Save** 클릭

5. **www 서브도메인 추가 (선택사항)**
   - **Add** 버튼 클릭
   - **Type**: `CNAME` 선택
   - **Name**: `www` 입력
   - **Value**: `cname.vercel-dns.com` (또는 Vercel이 제공한 값)
   - **TTL**: `600` 또는 `3600` 선택
   - **Save** 클릭

### 4단계: Vercel에서 도메인 확인

1. Vercel 대시보드로 돌아가기
2. **Domains** 페이지에서 `mintbiz.io` 상태 확인
3. 상태가 **Valid Configuration**으로 변경될 때까지 대기

### 5단계: DNS 전파 확인

DNS 변경사항이 전 세계에 전파되는데 시간이 걸립니다:

- **일반적으로**: 5분 ~ 2시간
- **최대**: 24-48시간

**전파 상태 확인 방법:**
1. [whatsmydns.net](https://www.whatsmydns.net) 접속
2. `mintbiz.io` 입력
3. A 레코드 또는 CNAME 레코드 확인
4. 전 세계 서버에서 올바른 값이 표시되면 완료

### 6단계: SSL 인증서 (자동)

Vercel이 자동으로 SSL 인증서를 발급합니다:
- DNS 전파 완료 후 자동으로 HTTPS 활성화
- 보통 몇 분 ~ 몇 시간 소요
- **Settings** → **Domains**에서 SSL 상태 확인 가능

## 문제 해결

### DNS가 전파되지 않음
- 고대디에서 레코드가 올바르게 저장되었는지 확인
- TTL 값을 낮춰서 다시 시도 (600초 권장)
- 브라우저 캐시 삭제 후 재시도

### Vercel에서 "Invalid Configuration" 오류
- DNS 레코드 값이 정확한지 확인
- Vercel이 제공한 값과 고대디에 입력한 값이 일치하는지 확인
- 레코드 타입(A 또는 CNAME)이 올바른지 확인

### 도메인이 작동하지 않음
- DNS 전파가 완료되었는지 확인 ([whatsmydns.net](https://www.whatsmydns.net))
- Vercel 프로젝트가 성공적으로 배포되었는지 확인
- 브라우저에서 `https://mintbiz.io` 접속 시도

### www 서브도메인 연결
- Vercel에서 `www.mintbiz.io`도 추가해야 합니다
- 고대디에서 www에 대한 CNAME 레코드 추가
- Vercel이 자동으로 www를 루트 도메인으로 리다이렉트합니다

## 완료 확인

다음이 모두 완료되면 성공입니다:

- ✅ Vercel Domains 페이지에서 `mintbiz.io` 상태가 **Valid Configuration**
- ✅ `https://mintbiz.io` 접속 시 사이트가 정상적으로 표시됨
- ✅ SSL 인증서가 활성화됨 (자물쇠 아이콘 표시)
- ✅ `www.mintbiz.io`도 정상 작동 (선택사항)

## 추가 리소스

- [Vercel 도메인 문서](https://vercel.com/docs/concepts/projects/domains)
- [고대디 DNS 관리 가이드](https://www.godaddy.com/help/manage-dns-680)

