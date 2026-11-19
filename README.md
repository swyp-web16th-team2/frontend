# front
React + Vite(TypeScript) 프론트엔드 입니다.

## 실행 순서
1. pnpm i : 의존성 파일 설치
2. pnpm dev : 로컬 서버 실행 

## 주요 기술 스택
 - React
 - TypeScript
 - tailwind
 - React Query, Zustand
 - Ky

## Architecture
- FSD 디자인 패턴 적용

### 구조
- app : 애플리케이션 초기화 및 전역 설정
- entities : API 도메인 별 최소 단위 UI 및 API, hook, zustand store 모음
- features : 기능이 들어간 컴포넌트 UI
- pages : 페이지 컴포넌트
- shared : 전역으로 사용되는 ui, 유틸 기능 등등
- widgets : 페이지를 구성하는 조립 단위 UI

### 하위 폴더
- provider : queryProvider 등 프로바이더 모음
- css : 공용 css 모음
- hook : 커스텀 훅 모음
- api : api instance, api 모음
- icon : svg icon 모음
- lib : 라이브러리 사용 함수 모음
- util : 유틸 함수 모음
- types : 타입 모음
- components : useState 등 리액트 훅을 사용하는 컴포넌트
- ui : 프롭스 등을 받아서 ui 를 렌더링 하기만 하는 컴포넌트 


## Page
- widgets 등 컴포넌트를 조합해 page의 역할만 하는 컴포넌트
- 화살표 함수로 생성
- export default 로 내보냄

### naming
- Pascal + camelCase 로 네이밍
- ...PageView 로 naming
- shared, entities, fetures, widgets 등을 조합

```tsx
   const IndexPageView = () => {
       return <>IndexPageView</>
   }

   export default IndexPageView;
```

## Component
- tsx 파일로 생성
- 화살표 함수로 생성
- export 로 내보냄

### naming
- Pascal + camelCase 로 네이밍

```tsx
   export const Component = () => {
       return <>Component</>
   }

```

## API
- ts 파일로 생성
- asnyc/await function 으로 생성
- try/catch 문으로 생성
- try 블록에는 return
- catch 블록에서는 throw
- export 로 내보냄

### naming
- UPPER_SNAKE_CASE 로 네이밍
- 서버 페이지 및 NextApiRouter 에서 호출하는 API 인 경우 API.SERVER...로 naming 
- fetures 의 클라이언트 컴포넌트 에서 NextApiRouter 로 호출하는 API 인 경우 API.CLIENT... 로 naming 

### Code Design
```ts
  import ky from "ky"

  export const CLIENT_API = ky.create({
      prefix : "{백엔드 도메인}",
      credentials : "include",
      timeout : 10000,
      hooks : {
          /** API 요청 전 작업 (헤더, 토큰 설정 등) */
          beforeRequest : [
              async ({ request }) => {
                  return request
              }
          ],
          /** API 에러 후 에러 메세지를 받기 전 */
          beforeError : [
              async ({ error }) => {
                  return error
              }
          ],
          /** API 통신 완료후 처리 */
          afterResponse : [
              async ({ response }) => {
                  return response
              }
          ]
      }
  })
```
```ts
    export async function API_CALLBACK() {
        try {
            const api = await CLIENT_API.post("/search", {
                body : JSON.stringify({data : 123}),
            }).json();
        }
        catch(err) {
            return err;
        }
    }
```

## Types
- declare 로 내보내 별도의 import 없이 전역으로 사용

### naming
- UPPER_SNAKE_CASE 로 네이밍
- 컴포넌트, api, hook, 등 함수 및 변수와 같은 이름으로 네이밍

```ts
    declare global {
        interface COMPONENT {
            children : React.ReactNode
        };

        type TYPE = "A" | "B";
    }

    export {}
```

## Function  
 - ts 파일로 생성
 - export 로 내보냄

### naming
 - Pascal + camelCase 로 네이밍

```ts
    export function Callback() {
        return true
    }
```


## Hooks
 - tsx 파일로 생성
 - 화살표 함수로 생성
 - export 로 내보냄

### naming
 - camelCase 로 네이밍

```tsx
    export const useCustomHook = () => {

        const [ state, SetState ] = useState(false);

        return { state, SetState }
    }
```