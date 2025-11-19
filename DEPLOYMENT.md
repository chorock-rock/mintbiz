# MintBiz 배포 가이드

이 문서는 mintbiz.io 도메인에 프로젝트를 배포하는 방법을 안내합니다.

## 방법 1: Vercel 사용 (추천) ⭐

Vercel은 무료이고 설정이 간단하며, 고대디 도메인을 쉽게 연결할 수 있습니다.

### 1단계: Vercel 계정 생성 및 프로젝트 배포

1. [Vercel](https://vercel.com)에 가입/로그인
2. "Add New Project" 클릭
3. GitHub/GitLab/Bitbucket에서 저장소 연결 또는 직접 업로드
4. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. "Deploy" 클릭

### 2단계: 고대디 도메인 연결

1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Domains 메뉴로 이동
3. "Add Domain" 클릭
4. `mintbiz.io` 입력
5. Vercel이 제공하는 DNS 레코드를 확인:
   - Type: `A` 또는 `CNAME`
   - Value: Vercel이 제공하는 IP 주소 또는 도메인

6. 고대디 DNS 설정:
   - 고대디 계정에 로그인
   - 도메인 관리 → DNS 관리로 이동
   - Vercel이 제공한 레코드 추가:
     - Type: `A` 또는 `CNAME`
     - Name: `@` (루트 도메인) 또는 `www`
     - Value: Vercel이 제공한 값
   - 저장 후 24-48시간 내 전파 완료

### 3단계: SSL 인증서 (자동)

Vercel은 자동으로 SSL 인증서를 발급하고 관리합니다.

---

## 방법 2: Netlify 사용

Netlify도 Vercel과 유사하게 사용할 수 있습니다.

### 1단계: Netlify 배포

1. [Netlify](https://www.netlify.com)에 가입/로그인
2. "Add new site" → "Import an existing project"
3. 저장소 연결 또는 드래그 앤 드롭으로 배포
4. 빌드 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### 2단계: 도메인 연결

1. Site settings → Domain management
2. "Add custom domain" → `mintbiz.io` 입력
3. Netlify가 제공하는 DNS 레코드를 고대디에 추가

---

## 방법 3: 고대디 호스팅 직접 사용

고대디 호스팅을 사용하는 경우 FTP로 파일을 업로드합니다.

### 1단계: 프로젝트 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 2단계: FTP 업로드

1. 고대디 호스팅 계정에서 FTP 정보 확인
2. FileZilla 같은 FTP 클라이언트 사용
3. `dist` 폴더의 모든 파일을 호스팅의 `public_html` 또는 `www` 폴더에 업로드
4. `.htaccess` 파일도 함께 업로드 (SPA 라우팅 지원)

### 3단계: DNS 설정

고대디 DNS 관리에서:
- Type: `A`
- Name: `@`
- Value: 호스팅 서버 IP 주소

---

## 빌드 명령어

```bash
# 프로덕션 빌드
npm run build

# 개발 모드 빌드 (소스맵 포함)
npm run build:dev
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

---

## 환경 변수 설정

프로덕션에서 라우트 메시징을 활성화하려면:

```bash
VITE_ENABLE_ROUTE_MESSAGING=true npm run build
```

또는 배포 플랫폼의 환경 변수 설정에서:
- `VITE_ENABLE_ROUTE_MESSAGING=true`

---

## 문제 해결

### 빌드 오류
- `node_modules` 삭제 후 `npm install` 재실행
- Node.js 버전 확인 (권장: 18.x 이상)

### 도메인 연결 오류
- DNS 전파 대기 (최대 48시간)
- DNS 레코드가 정확한지 확인
- 고대디와 배포 플랫폼 양쪽 설정 확인

### 페이지 새로고침 시 404 오류
- HashRouter를 사용 중이므로 문제 없음
- 만약 BrowserRouter로 변경했다면 서버 설정 필요

---

## 추천 배포 방법

**Vercel 사용을 강력히 추천합니다:**
- ✅ 무료
- ✅ 자동 SSL
- ✅ 빠른 배포
- ✅ 간단한 도메인 연결
- ✅ 자동 빌드 및 배포 (Git 연동 시)

