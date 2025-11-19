# Vercel 배포 가이드 - MintBiz

이 문서는 MintBiz 프로젝트를 Vercel에 배포하는 단계별 가이드를 제공합니다.

## 사전 준비

1. **GitHub 저장소 확인**
   - 프로젝트가 `git@github.com:chorock-rock/mintbiz.git`에 푸시되어 있어야 합니다.

2. **Vercel 계정**
   - [vercel.com](https://vercel.com)에서 계정 생성 (GitHub 계정으로 로그인 가능)

## 배포 단계

### 1단계: Vercel에 프로젝트 연결

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 목록에서 `chorock-rock/mintbiz` 선택
4. "Import" 클릭

### 2단계: 프로젝트 설정

Vercel이 자동으로 다음 설정을 감지합니다:
- **Framework Preset**: Vite ✅
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**추가 설정 (선택사항):**
- **Node.js Version**: 18.x 이상 권장
- **Environment Variables**: 필요시 추가
  - `VITE_ENABLE_ROUTE_MESSAGING`: `true` (필요한 경우)

### 3단계: 배포 실행

1. "Deploy" 버튼 클릭
2. 빌드 로그 확인 (약 1-2분 소요)
3. 배포 완료 후 URL 확인 (예: `mintbiz-xxx.vercel.app`)

### 4단계: 커스텀 도메인 연결 (mintbiz.io)

1. 프로젝트 대시보드에서 **Settings** → **Domains** 메뉴로 이동
2. "Add Domain" 클릭
3. `mintbiz.io` 입력
4. Vercel이 제공하는 DNS 레코드 확인:
   - **Type**: `A` 또는 `CNAME`
   - **Value**: Vercel이 제공하는 IP 주소 또는 도메인

5. **고대디 DNS 설정**:
   - 고대디 계정 로그인
   - 도메인 관리 → DNS 관리
   - 다음 레코드 추가:
     ```
     Type: A (또는 CNAME)
     Name: @ (루트 도메인)
     Value: Vercel이 제공한 값
     TTL: 3600 (또는 기본값)
     ```
   - `www` 서브도메인도 필요하면:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com (또는 Vercel이 제공한 값)
     ```

6. **DNS 전파 대기**: 24-48시간 (보통 몇 분~몇 시간 내 완료)

7. **SSL 인증서**: Vercel이 자동으로 발급 및 관리

## 자동 배포 설정

GitHub에 푸시하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "Update project"
git push origin main
```

Vercel이 자동으로:
1. 변경사항 감지
2. 새 빌드 실행
3. 배포 완료 후 알림

## 환경 변수 설정

프로젝트 설정에서 환경 변수를 추가할 수 있습니다:

1. **Settings** → **Environment Variables**
2. 변수 추가:
   - `VITE_ENABLE_ROUTE_MESSAGING`: `true` (필요한 경우)
   - 기타 필요한 환경 변수

## 빌드 최적화

### 캐시 설정
Vercel은 자동으로 `node_modules`를 캐시합니다.

### 빌드 시간 단축
- 불필요한 의존성 제거
- `package.json`의 `dependencies`와 `devDependencies` 구분 확인

## 문제 해결

### 빌드 실패
1. **로그 확인**: Vercel 대시보드의 "Deployments" → 실패한 배포 → "View Build Logs"
2. **로컬 빌드 테스트**:
   ```bash
   npm run build
   ```
3. **Node.js 버전 확인**: Vercel 설정에서 18.x 이상으로 설정

### 도메인 연결 실패
1. DNS 레코드가 올바른지 확인
2. DNS 전파 확인: [whatsmydns.net](https://www.whatsmydns.net)
3. Vercel과 고대디 양쪽 설정 확인

### 404 오류
- HashRouter를 사용 중이므로 문제 없어야 합니다
- 만약 BrowserRouter로 변경했다면 `vercel.json`의 `rewrites` 설정 확인

## 배포 상태 확인

- **Production**: `main` 브랜치에 푸시 시 자동 배포
- **Preview**: 다른 브랜치에 푸시 시 프리뷰 URL 생성
- **Rollback**: 이전 배포로 롤백 가능

## 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html#vercel)

